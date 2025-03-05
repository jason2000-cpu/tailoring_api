import prisma from '../../prisma/prismaClient'


const expensesResolvers = {
    Query: {
        getBusinessExpenses: async (_: any, __: any, { user_id }: { user_id: number }) => {
            try {
                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) throw new Error(`Business with User Id : ${ user_id } Not Found`)

                const businessExpenses  = await prisma.expenses.findMany({ where: { businessId: business.id }})

                return { status: 'Success', message: 'Business Expenses Fetched Successfully', businessExpenses }
            } catch (error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },
        getLast30DaysExpenses: async(_:any, __: any, { user_id }: { user_id: number }) => {
            try {
                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) throw new Error(`Business with User Id : ${ user_id } Not Found`)

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

                return { status: 'Success', total }

            } catch(error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    },

    Mutation: {
        addExpense: async (_: any, { amount, description, category }: any, { user_id }: { user_id: number } ) => {
            console.log( amount, description, category)
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user || user.role !== "USER") return { status: 'Error', message: 'Not Authorized'}

                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) throw new Error(`Business with User Id : ${ user_id } Not Found`)
                
                const expenses = await prisma.expenses.create({
                    data:  { businessId: business.id, amount, description, category }
                })

                return { status: 'Success', message: 'Expenses Added Successfully' }

            } catch(error) {
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        updateExpense: async (_: any, { expenseId, amount, description, category }: any, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user || user.role !== "USER") throw new Error('Not Authorized')
                
                const updatedIncome: any = {}
                if(amount) updatedIncome.amount = amount;
                if(description) updatedIncome.description = description;
                if(category) updatedIncome.category = category;
    
                await prisma.expenses.update({
                    where: { id: expenseId },
                    data: updatedIncome
                })
    
                return { status: 'Success', message: 'Expenses Updated Successfully'}
            } catch(error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },
    
        deleteExpense: async (_: any, { expenseIds }:any, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if (!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}
    
                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) return { status: 'Error', message: `Business with User Id : ${ user_id } Not Found`}
    
                const integerOrderIds = expenseIds.map((id: any) => parseInt(id, 10)).filter((id: any) => !isNaN(id))
    
                await prisma.expenses.deleteMany({
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
                }
                
            } catch(error: any) {
                console.log(error)
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    },

}

export default expensesResolvers;