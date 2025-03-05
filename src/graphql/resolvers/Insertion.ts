import prisma from "../../prisma/prismaClient";
import { subDays, subMonths, subYears, startOfDay } from "date-fns";

async function insertTestIncomeForTailoringBusiness() {
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
                const createdAt = startOfDay(subYears(new Date(), i));
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
                const createdAt = startOfDay(subMonths(new Date(), i));
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
                const createdAt = startOfDay(subDays(new Date(), i));
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
        await prisma.income.createMany({
            data: allIncomes,
            skipDuplicates: true, // Avoid inserting duplicates
        });

        console.log(`Inserted ${allIncomes.length} income records successfully.`);
    } catch (error) {
        console.error("Error inserting test income records:", error);
    }
}

// Call function for testing
insertTestIncomeForTailoringBusiness();
