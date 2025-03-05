import prisma from "../prisma/prismaClient";
import { startOfDay } from 'date-fns'
import { toZonedTime, toDate } from 'date-fns-tz';

const timeZone = 'Africa/Nairobi';

async function synchronizeFinancialRecords(params: any) {
    const { model, action, args } = params;
    // console.log("MODEL::",model, "ACTION::", action, "ARGS::",args)

    const businessId = args.data?.businessId || args.where?.businessId;


    if(!businessId) return;
    try {
        const income = await prisma.income.groupBy({
            by: ['createdAt', 'businessId'],
            where: { businessId },
            _sum: { amount: true }
        });

        const expenses = await prisma.expenses.groupBy({
            by: ['createdAt', 'businessId'],
            where: { businessId },
            _sum: { amount: true },
        });

        const uniqueDates = new Set([
            ...income.map(i => toZonedTime(new Date(i.createdAt), timeZone).toISOString()),
            ...expenses.map(e => toZonedTime(new Date(e.createdAt), timeZone).toISOString())
        ]);

        for (const dateStr of uniqueDates) {
            const date = new Date(dateStr);
            const dateIncome = income.find(i => toZonedTime(new Date(i.createdAt), timeZone).toISOString() === dateStr)?._sum.amount || 0;
            const dateExpenses = expenses.find(e => toZonedTime(new Date(e.createdAt), timeZone).toISOString() === dateStr)?._sum.amount || 0;
 

            const existingRecord = await prisma.financialRecord.findUnique({
                where: { 
                    businessId_date : {
                        businessId, 
                        date: new Date(date).toISOString()
                    }
                 }
            });

            
            await prisma.financialRecord.upsert({
                where: {
                    businessId_date : {
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
    } catch(error: any) {
        console.error("Error updating financial records:", error.message)
    }
}

export default synchronizeFinancialRecords;