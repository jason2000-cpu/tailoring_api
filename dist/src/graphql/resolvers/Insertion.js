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
const date_fns_1 = require("date-fns");
function insertTestIncomeForTailoringBusiness() {
    return __awaiter(this, void 0, void 0, function* () {
        const businessId = 9;
        const expensesData = [
            { amount: 20000, description: "Fabric purchase", category: "Materials" },
            { amount: 5000, description: "Employee wages", category: "Labor" },
            { amount: 1500, description: "Shop rent", category: "Rent" },
            { amount: 1000, description: "Electricity bill", category: "Utilities" },
            { amount: 2000, description: "Advertising (social media)", category: "Marketing" }
        ];
        // Income descriptions and categories specific to a tailoring business
        const incomeDescriptions = [
            "Custom Orders",
            "Alteration Services",
            "Clothing Sales",
            "Tailoring Services",
            "Bridal Wear Sales"
        ];
        const incomeCategories = [
            "Custom Tailoring",
            "Alterations",
            "Clothing Sales",
            "Services",
            "Bridal Wear"
        ];
        const allIncomes = [];
        try {
            // Insert Yearly Income (for past 3 years) for each expense
            for (let i = 1; i <= 3; i++) {
                for (let j = 0; j < expensesData.length; j++) {
                    const expense = expensesData[j];
                    const createdAt = (0, date_fns_1.startOfDay)((0, date_fns_1.subYears)(new Date(), i));
                    const randomAmount = expense.amount * (1 + Math.random() * 0.2); // Random income amount (+- 20% of expense)
                    allIncomes.push({
                        businessId,
                        amount: randomAmount,
                        description: incomeDescriptions[j % incomeDescriptions.length] + " (Income - Yearly)",
                        category: incomeCategories[j % incomeCategories.length],
                        createdAt,
                    });
                }
            }
            // Insert Monthly Income (for past 6 months) for each expense
            for (let i = 1; i <= 6; i++) {
                for (let j = 0; j < expensesData.length; j++) {
                    const expense = expensesData[j];
                    const createdAt = (0, date_fns_1.startOfDay)((0, date_fns_1.subMonths)(new Date(), i));
                    const randomAmount = expense.amount * (1 + Math.random() * 0.2); // Random income amount (+- 20% of expense)
                    allIncomes.push({
                        businessId,
                        amount: randomAmount,
                        description: incomeDescriptions[j % incomeDescriptions.length] + " (Income - Monthly)",
                        category: incomeCategories[j % incomeCategories.length],
                        createdAt,
                    });
                }
            }
            // Insert Daily Income (for past 7 days) for each expense
            for (let i = 1; i <= 7; i++) {
                for (let j = 0; j < expensesData.length; j++) {
                    const expense = expensesData[j];
                    const createdAt = (0, date_fns_1.startOfDay)((0, date_fns_1.subDays)(new Date(), i));
                    const randomAmount = expense.amount * (1 + Math.random() * 0.2); // Random income amount (+- 20% of expense)
                    allIncomes.push({
                        businessId,
                        amount: randomAmount,
                        description: incomeDescriptions[j % incomeDescriptions.length] + " (Income - Daily)",
                        category: incomeCategories[j % incomeCategories.length],
                        createdAt,
                    });
                }
            }
            // Insert all income records in bulk
            yield prismaClient_1.default.income.createMany({
                data: allIncomes,
                skipDuplicates: true, // Avoid inserting duplicates
            });
            console.log(`Inserted ${allIncomes.length} income records successfully.`);
        }
        catch (error) {
            console.error("Error inserting test income records:", error);
        }
    });
}
// Call function for testing
insertTestIncomeForTailoringBusiness();
