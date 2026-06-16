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
const prismaClient_1 = __importDefault(require("../../prisma/prismaClient"));
const expensesResolvers = {
    Query: {
        getBusinessExpenses: (_1, __1, _a) => __awaiter(void 0, [_1, __1, _a], void 0, function* (_, __, { user_id }) {
            try {
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    throw new Error(`Business with User Id : ${user_id} Not Found`);
                const businessExpenses = yield prismaClient_1.default.expenses.findMany({ where: { businessId: business.id } });
                return { status: 'Success', message: 'Business Expenses Fetched Successfully', businessExpenses };
            }
            catch (error) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        getLast30DaysExpenses: (_1, __1, _a) => __awaiter(void 0, [_1, __1, _a], void 0, function* (_, __, { user_id }) {
            try {
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    throw new Error(`Business with User Id : ${user_id} Not Found`);
                const today = new Date();
                const last30Days = new Date();
                last30Days.setDate(today.getDate() - 30);
                const expenses = yield prismaClient_1.default.expenses.findMany({
                    where: {
                        businessId: business.id,
                        createdAt: {
                            gte: last30Days,
                            lte: today
                        }
                    },
                    select: {
                        amount: true,
                        createdAt: true
                    }
                });
                const total = expenses.reduce((sum, record) => sum + record.amount, 0);
                return { status: 'Success', total };
            }
            catch (error) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        })
    },
    Mutation: {
        addExpense: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { amount, description, category }, { user_id }) {
            console.log(amount, description, category);
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== "USER")
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    throw new Error(`Business with User Id : ${user_id} Not Found`);
                const expenses = yield prismaClient_1.default.expenses.create({
                    data: { businessId: business.id, amount, description, category }
                });
                return { status: 'Success', message: 'Expenses Added Successfully' };
            }
            catch (error) {
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        updateExpense: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { expenseId, amount, description, category }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== "USER")
                    throw new Error('Not Authorized');
                const updatedIncome = {};
                if (amount)
                    updatedIncome.amount = amount;
                if (description)
                    updatedIncome.description = description;
                if (category)
                    updatedIncome.category = category;
                yield prismaClient_1.default.expenses.update({
                    where: { id: expenseId },
                    data: updatedIncome
                });
                return { status: 'Success', message: 'Expenses Updated Successfully' };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        deleteExpense: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { expenseIds }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    return { status: 'Error', message: `Business with User Id : ${user_id} Not Found` };
                const integerOrderIds = expenseIds.map((id) => parseInt(id, 10)).filter((id) => !isNaN(id));
                yield prismaClient_1.default.expenses.deleteMany({
                    where: {
                        id: {
                            in: integerOrderIds,
                        }
                    }
                });
                const ordersLength = expenseIds.length;
                return {
                    status: 'Success',
                    message: `${ordersLength} Income Deleted Successfully`
                };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        })
    },
};
exports.default = expensesResolvers;
