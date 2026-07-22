import { Context } from "../../utils/types";
import { builder } from "../builder";
import { addExpenseInput, ExprensesResponseRef } from "./types";


builder.mutationFields((t) => ({
    addExpense: t.field({
        type: ExprensesResponseRef,
        args: {
            input: t.arg({ type: addExpenseInput, required: true }),
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { input }: any, ctx: Context)=> {
            const { prisma, user } = ctx;
            try {
                const { amount, description, category } = input;

                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id}
                });
                if(!business) throw new Error(`Business with User Id : ${ user?.id } Not Found`)
                
                const expenses = await prisma.expenses.create({
                    data:  { 
                        amount, description, category,
                        businessId: business.id 
                    }
                })

                return { success: true, message: 'Expenses Added Successfully' }

            } catch(error: any) {
                return { success: false, message: error.message || 'An Internal Server Error Occured'}
            }            
        }
    }),

    updateExpense: t.field({
        type: ExprensesResponseRef,
        args: {
            expenseId: t.arg.string({ required: true }),
            category: t.arg.string({}),
            amount: t.arg.float({}),
            description: t.arg.string({})
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { expenseId, amount, description, category }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                
                const updatedIncome: any = {}
                if(amount) updatedIncome.amount = amount;
                if(description) updatedIncome.description = description;
                if(category) updatedIncome.category = category;
    
                await prisma.expenses.update({
                    where: { id: expenseId },
                    data: updatedIncome
                })
    
                return { success: true , message: 'Expenses Updated Successfully'}
            } catch(error) {
                console.log(error);
                return { success: true, message: 'An Internal Server Error Occured'}
            }
        }
    }),

    deleteExpense: t.field({
        type: ExprensesResponseRef,
        args: {
            expenseIds: t.arg.stringList({ required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true,
        },
        resolve: async (parent: any, { expenseIds }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
    
                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id}
                });
                if(!business) return { 
                    success: false, 
                    message: `Business with User Id : ${ user?.id } Not Found`
                }
    
                const integerOrderIds = expenseIds
                            .map((id: any) => parseInt(id, 10))
                            .filter((id: any) => !isNaN(id))
    
                await prisma.expenses.deleteMany({
                    where: {
                        id: {
                            in: integerOrderIds,
                        }
                    }
                });
    
                const ordersLength = expenseIds.length;
                return { 
                    success: true, 
                    message: `${ordersLength} Income Deleted Successfully`
                }
                
            } catch(error: any) {
                console.log(error)
                return { 
                    success: false, 
                    message: error.message || 'An Internal Server Error Occured'
                }
            }            
        }
    })
}))
