import aggregateRecords from '../../utils/aggregateRecords'
import prisma from '../../prisma/prismaClient';


const financialRecordsResolvers = {
    Query: {
        getUserFinancialRecords: async (_: any, __: any, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }})
                if(!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) return { status: "Error", message: `Business with User Id : ${ user_id } Not Found`}

                const financialRecords = prisma.financialRecord.findMany({ 
                    where: { businessId: business.id}
                })
                
                return { status: 'Success', message: 'Records fetched Successfully', financialRecords }
            } catch(error: any) {
                console.log(error.message)
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        financialSummary: async (_: any, { groupBy, startDate, endDate }: any, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized' };

                const business = await prisma.businesses.findUnique({ where: { userId: user_id } });
                if (!business) throw new Error(`Business with User Id: ${user_id} Not Found`);

                // Determine date range based on groupBy
                let formattedStartDate: Date = new Date();
                let formattedEndDate: Date = new Date(); // Always end at today
                formattedEndDate.setDate(formattedEndDate.getDate() + 1)

                if (startDate && endDate) {
                    formattedStartDate = new Date(startDate);
                    formattedEndDate = new Date(endDate);
                } else {
                    const today = new Date();

                    if (groupBy === "daily") {
                        formattedStartDate = new Date();
                        formattedStartDate.setDate(today.getDate() - 6); // Last 7 days including today
                    } else if (groupBy === "monthly") {
                        formattedStartDate = new Date(today.getFullYear(), today.getMonth() - 10, 1); // Last 12 months
                    } else if (groupBy === "yearly") {
                        const earliestYearRecord = await prisma.financialRecord.findFirst({
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
                } else if (groupBy === "yearly") {
                    dateTrunc = 'year';
                    dateFormat = 'YYYY';
                }

                // Fetch aggregated data
                const financialRecords: any = await prisma.$queryRaw`
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

                const records = financialRecords.map((record: any) => ({
                    date: record.formattedDate,  
                    income: record.totalIncome,
                    expenses: record.totalExpenses,
                    profit: record.totalProfit
                }));

                const aggregated = aggregateRecords(records)

                // console.log(`RECORDS FOUND::: ${groupBy} total::: ${records.length}::::`, aggregated)
                
                return aggregated;
            } catch (error: any) {
                console.error("Error in financialSummary:", error);
                return { status: 'Error', message: 'An Internal Server Error Occurred' };
            }
        }
    },

    Mutation: {
        deleteFinancialRecord: async (_: any, { id }: { id: number }) => {
            try {
                const financialRecord = await prisma.financialRecord.findUnique({ where: { id }})
                if (!financialRecord) return { status: 'Error', message: `Financial Record With id ${ id } Not Found`}
                
                await prisma.financialRecord.delete({ where: { id }})
                return { status: 'Success', message: 'Financial Record Deleted Successfully'}
            } catch(error: any) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    }
}

export default financialRecordsResolvers;