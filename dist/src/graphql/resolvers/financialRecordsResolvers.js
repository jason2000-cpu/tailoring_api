"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aggregateRecords_1 = __importDefault(require("../../utils/aggregateRecords"));
const prismaClient_1 = __importDefault(require("../../prisma/prismaClient"));
const financialRecordsResolvers = {
    Query: {
        getUserFinancialRecords: (_1, __1, _a) => __awaiter(void 0, [_1, __1, _a], void 0, function* (_, __, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    return { status: "Error", message: `Business with User Id : ${user_id} Not Found` };
                const financialRecords = prismaClient_1.default.financialRecord.findMany({
                    where: { businessId: business.id }
                });
                return { status: 'Success', message: 'Records fetched Successfully', financialRecords };
            }
            catch (error) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        financialSummary: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { groupBy, startDate, endDate }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    throw new Error(`Business with User Id: ${user_id} Not Found`);
                // Determine date range based on groupBy
                let formattedStartDate = new Date();
                let formattedEndDate = new Date(); // Always end at today
                formattedEndDate.setDate(formattedEndDate.getDate() + 1);
                if (startDate && endDate) {
                    formattedStartDate = new Date(startDate);
                    formattedEndDate = new Date(endDate);
                }
                else {
                    const today = new Date();
                    if (groupBy === "daily") {
                        formattedStartDate = new Date();
                        formattedStartDate.setDate(today.getDate() - 6); // Last 7 days including today
                    }
                    else if (groupBy === "monthly") {
                        formattedStartDate = new Date(today.getFullYear(), today.getMonth() - 10, 1); // Last 12 months
                    }
                    else if (groupBy === "yearly") {
                        const earliestYearRecord = yield prismaClient_1.default.financialRecord.findFirst({
                            where: { businessId: business.id },
                            orderBy: { date: "asc" },
                            select: { date: true }
                        });
                        formattedStartDate = earliestYearRecord ? new Date(earliestYearRecord.date) : new Date(today.getFullYear(), 0, 1);
                    }
                }
                // Determine the correct date truncation and format
                let dateTrunc = 'day';
                let dateFormat = 'YYYY-MM-DD';
                if (groupBy === "monthly") {
                    dateTrunc = 'month';
                    dateFormat = 'YYYY-MM';
                }
                else if (groupBy === "yearly") {
                    dateTrunc = 'year';
                    dateFormat = 'YYYY';
                }
                // Fetch aggregated data
                const financialRecords = yield prismaClient_1.default.$queryRaw `
                    SELECT 
                        DATE_TRUNC(${dateTrunc}, "date")::date AS "date",
                        TO_CHAR(DATE_TRUNC(${dateTrunc}, "date"), ${dateFormat}) AS "formattedDate",
                        SUM("income") AS "totalIncome",
                        SUM("expenses") AS "totalExpenses",
                        (SUM("income") - SUM("expenses")) AS "totalProfit"
                    FROM "FinancialRecord"
                    WHERE "businessId" = ${business.id}
                    AND "date" >= ${formattedStartDate.toISOString()}::date
                    AND "date" <= ${formattedEndDate.toISOString()}::date
                    GROUP BY "date", TO_CHAR(DATE_TRUNC(${dateTrunc}, "date"), ${dateFormat})
                    ORDER BY "date" ASC;
                `;
                const records = financialRecords.map((record) => ({
                    date: record.formattedDate,
                    income: record.totalIncome,
                    expenses: record.totalExpenses,
                    profit: record.totalProfit
                }));
                const aggregated = (0, aggregateRecords_1.default)(records);
                // console.log(`RECORDS FOUND::: ${groupBy} total::: ${records.length}::::`, aggregated)
                return aggregated;
            }
            catch (error) {
                console.error("Error in financialSummary:", error);
                return { status: 'Error', message: 'An Internal Server Error Occurred' };
            }
        })
    },
    Mutation: {
        deleteFinancialRecord: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            try {
                const financialRecord = yield prismaClient_1.default.financialRecord.findUnique({ where: { id } });
                if (!financialRecord)
                    return { status: 'Error', message: `Financial Record With id ${id} Not Found` };
                yield prismaClient_1.default.financialRecord.delete({ where: { id } });
                return { status: 'Success', message: 'Financial Record Deleted Successfully' };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        })
    }
};
exports.default = financialRecordsResolvers;
