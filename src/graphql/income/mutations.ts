import { Context } from "../../utils/types";
import { builder } from "../builder";
import { addIncomeInput, IncomeResponseRef } from "./types";


builder.mutationFields((t) => ({
    addIncome: t.field({
        type: IncomeResponseRef,
        args: {
            input: t.arg({ type: addIncomeInput, required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { input }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                const { amount, description, category } = input;

                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.role }
                });
                if(!business) throw new Error(`Business with User Id : ${ user?.role } Not Found`)
                
                const income = await prisma.income.create({
                    data:  { 
                        amount, description, 
                        category,
                        businessId: business.id
                    }
                })

                return { success: true, message: 'Income Added Successfully' }

            } catch(error: any) {
                console.log(error.message)
                return { 
                    success: true, 
                    message: error.message || 'An Internal Server Error Occured'
                }
            }
        }
    }),

    updateIncome: t.field({
        type: IncomeResponseRef,
        args: {
            incomeId: t.arg.string({ required: true }),
            amount: t.arg.int(),
            description: t.arg.string(),
            category: t.arg.string()
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { incomeId, amount, description, category }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                const updatedIncome: any = {};
                if (amount !== undefined) updatedIncome.amount = amount;
                if (description !== undefined) updatedIncome.description = description;
                if (category !== undefined) updatedIncome.category = category;
        
                if (Object.keys(updatedIncome).length === 0) {
                    return { 
                        success: false, 
                        message: "No valid fields provided for update" 
                    };
                }
        
                await prisma.income.update({
                    where: { id: incomeId },
                    data: updatedIncome,
                });
        
        
                return { success: true, message: "Income Updated Successfully" };
            } catch (error: any) {
                console.error("Error updating income:", error);
        
                if (error.code === "P2025") {
                    return { success: false, message: "Income record not found" };
                }
        
                return { 
                    success: false, 
                    message: error.message || "An Internal Server Error Occurred" 
                };
            }            
        }
    }),

    deleteIncome: t.field({
        type: IncomeResponseRef,
        args: {
            incomeIds: t.arg.stringList({ required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { incomeIds }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {

                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id}
                });
                if(!business) return {
                    success: false,
                     message: `Business with User Id : ${ user?.id } Not Found`}

                const integerOrderIds = incomeIds.map((id: any) => parseInt(id, 10)).filter((id: any) => !isNaN(id))

                await prisma.income.deleteMany({
                    where: {
                        id: {
                            in: integerOrderIds,
                        }
                    }
                });

                const ordersLength = incomeIds.length;
                return { 
                    success: true, 
                    message: `${ordersLength} Income Deleted Successfully`
                }
                
            } catch(error: any) {
                console.log(error)
                return { 
                    success: false, 
                    message:  error.message || 'An Internal Server Error Occured'
                }
            }            
        }
    })
}))
