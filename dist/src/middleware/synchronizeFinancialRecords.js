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
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const date_fns_tz_1 = require("date-fns-tz");
const timeZone = 'Africa/Nairobi';
function synchronizeFinancialRecords(params) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const { model, action, args } = params;
        // console.log("MODEL::",model, "ACTION::", action, "ARGS::",args)
        const businessId = ((_a = args.data) === null || _a === void 0 ? void 0 : _a.businessId) || ((_b = args.where) === null || _b === void 0 ? void 0 : _b.businessId);
        if (!businessId)
            return;
        try {
            const income = yield prismaClient_1.default.income.groupBy({
                by: ['createdAt', 'businessId'],
                where: { businessId },
                _sum: { amount: true }
            });
            const expenses = yield prismaClient_1.default.expenses.groupBy({
                by: ['createdAt', 'businessId'],
                where: { businessId },
                _sum: { amount: true },
            });
            const uniqueDates = new Set([
                ...income.map(i => (0, date_fns_tz_1.toZonedTime)(new Date(i.createdAt), timeZone).toISOString()),
                ...expenses.map(e => (0, date_fns_tz_1.toZonedTime)(new Date(e.createdAt), timeZone).toISOString())
            ]);
            for (const dateStr of uniqueDates) {
                const date = new Date(dateStr);
                const dateIncome = ((_c = income.find(i => (0, date_fns_tz_1.toZonedTime)(new Date(i.createdAt), timeZone).toISOString() === dateStr)) === null || _c === void 0 ? void 0 : _c._sum.amount) || 0;
                const dateExpenses = ((_d = expenses.find(e => (0, date_fns_tz_1.toZonedTime)(new Date(e.createdAt), timeZone).toISOString() === dateStr)) === null || _d === void 0 ? void 0 : _d._sum.amount) || 0;
                const existingRecord = yield prismaClient_1.default.financialRecord.findUnique({
                    where: {
                        businessId_date: {
                            businessId,
                            date: new Date(date).toISOString()
                        }
                    }
                });
                yield prismaClient_1.default.financialRecord.upsert({
                    where: {
                        businessId_date: {
                            businessId,
                            date: new Date(date).toISOString()
                        }
                    },
                    create: {
                        businessId,
                        date: new Date(date),
                        income: dateIncome,
                        expenses: dateExpenses,
                        profit: dateIncome - dateExpenses,
                    },
                    update: {
                        income: dateIncome,
                        expenses: dateExpenses,
                        profit: dateIncome - dateExpenses
                    },
                });
            }
            // console.log("USER/BUSINESS ID ON FINANCIAL RECORDS TRIGGER:::", businessId)
        }
        catch (error) {
            console.error("Error updating financial records:", error.message);
        }
    });
}
exports.default = synchronizeFinancialRecords;
