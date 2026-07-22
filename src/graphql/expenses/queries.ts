import { Context } from "../../utils/types";
import { builder } from "../builder";
import { ExprensesResponseRef } from "./types";


builder.queryFields((t) => ({
    getBusinessExpenses: t.field({
        type: ExprensesResponseRef,
        args: {},
        authScopes: {
            isAuthenticated: true,
            isUser: true,
        },
        resolve: async (parent: any, args: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id}
                });

                if(!business) throw new Error(`Business with User Id : ${ user?.id } Not Found`)

                const businessExpenses  = await prisma.expenses.findMany({ 
                    where: { businessId: business.id }
                })

                return { 
                    success: true, 
                    message: 'Business Expenses Fetched Successfully', 
                    data: businessExpenses 
                }
            } catch (error: any) {
                console.log(error.message);
                return { 
                    success: false, 
                    message:  error.message || 'An Internal Server Error Occured'
                }
            }            
        }
    }),

    getLast30DaysExpenses: t.field({
        type: ExprensesResponseRef,
        args: {},
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, {}: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id}
                });

                if(!business) throw new Error(`Business with User Id : ${ user?.id } Not Found`)

                const today = new Date();
                const last30Days = new Date();
                last30Days.setDate(today.getDate() - 30);

                const expenses = await prisma.expenses.findMany({
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
                })

                const total = expenses.reduce((sum, record)=> sum + record.amount, 0);

                return { 
                    success: true, 
                    message: 'Business Expenses Fetched Successfully',  
                    data: total 
                }

            } catch(error: any) {
                console.log(error.message);
                return { 
                    success: false, 
                    message: error.message || 'An Internal Server Error Occured'
                }
            }            
        }
    })
}))
