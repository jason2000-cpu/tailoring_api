import { Context } from "../../utils/types";
import { builder } from "../builder";
import { IncomeResponseRef } from "./types";


builder.queryFields((t) => ({
    getBusinessIncome: t.field({
        type: IncomeResponseRef,
        args: {},
        authScopes: {
            isAuthenticated: true,
            isUser: true,
        },
        resolve: async (parent: any, { }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {

                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id}
                });

                if(!business) throw new Error(`Business with User Id : ${ user?.id } Not Found`)

                const businessIncome  = await prisma.income.findMany({ 
                    where: { businessId: business.id }
                });

                return { 
                    success: true, 
                    message: 'User Income Fetched Successfully', 
                    data: businessIncome 
                }
            } catch (error: any) {
                console.log(error.message);
                return { 
                    success: false, 
                    message: error.message || 'An Internal Server Error Occured'
                }
            }            
        }
    }),

    getLast30DaysIncome: t.field({
        type: IncomeResponseRef,
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

                const income = await prisma.income.findMany({
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

                const total = income.reduce((sum, record) => sum + record.amount, 0);

                return { 
                    success: true,
                    message: "Fetch Successful",
                    data:total
                }

            } catch(error: any) {
                console.log(error.message);
                return { 
                    success: false, 
                    message:  error.message || 'An Internal Server Error Occured'
                }
            }            
        }
    })
}))
