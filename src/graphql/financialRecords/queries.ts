import aggregateRecords from "../../utils/aggregateRecords";
import { Context } from "../../utils/types";
import { builder } from "../builder";
import { FinancialRecordResponseRef, GetFinancialSummaryInput } from "./types";


builder.queryFields((t) => ({
    getUserFinancialRecords: t.field({
        type: FinancialRecordResponseRef,
        args: {},
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, args: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {

                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id}
                });
                if(!business) return { 
                    success: false, 
                    message: `Business with User Id : ${ user?.id } Not Found`
                }

                const financialRecords = prisma.financialRecord.findMany({ 
                    where: { businessId: business.id}
                })
                
                return { 
                    success: true, 
                    message: 'Records fetched Successfully', 
                    data: financialRecords 
                }
            } catch(error: any) {
                console.log(error.message)
                return { 
                    success: false, 
                    message: error.message ||  'An Internal Server Error Occured'
                }
            }            
        }
    }),

    financialSummary: t.field({
        type: FinancialRecordResponseRef,
        args: {
            input: t.arg({ type: GetFinancialSummaryInput , required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { input }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                const { groupBy, startDate, endDate } = input;

                const business = await prisma.businesses.findUnique({ where: { userId: user?.id } });
                if (!business) throw new Error(`Business with User Id: ${user?.id} Not Found`);

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

                        formattedStartDate = earliestYearRecord 
                                    ? new Date(earliestYearRecord.date) 
                                    : new Date(today.getFullYear(), 0, 1);
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
                        DATE_TRUNC(${dateTrunc}, "date")::date AS "truncDate",
                        TO_CHAR(DATE_TRUNC(${dateTrunc}, "date"), ${dateFormat}) AS "formattedDate",
                        SUM("income") AS "totalIncome",
                        SUM("expenses") AS "totalExpenses",
                        (SUM("income") - SUM("expenses")) AS "totalProfit"
                    FROM "FinancialRecord"
                    WHERE "businessId" = ${business.id}
                    AND "date" >= ${formattedStartDate.toISOString()}::date
                    AND "date" <= ${formattedEndDate.toISOString()}::date
                    GROUP BY "truncDate", "formattedDate"
                    ORDER BY "truncDate" ASC;
                `;

                const records = financialRecords.map((record: any) => ({
                    date: record.formattedDate,  
                    income: record.totalIncome,
                    expenses: record.totalExpenses,
                    profit: record.totalProfit
                }));

                const aggregated = aggregateRecords(records);
                
                return { success: true, message: "Aggregation Successful",  data: aggregated };
            } catch (error: any) {
                console.error("Error in financialSummary:", error);
                return { 
                    success: false, 
                    message: error.message || 'An Internal Server Error Occurred' 
                };
            }            
        }

    })
}))
