import prisma from '../../lib/prismaClient'


const incomeResolvers = {
    Query: {
        getBusinessIncome: async (_: any, __: any, { user_id }: { user_id: number }) => {
            try {
                if (!user_id) throw new Error('Not Authorized')
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user || user.role !== "USER") throw new Error('Not Authorized')

                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) throw new Error(`Business with User Id : ${ user_id } Not Found`)

                const businessIncome  = await prisma.income.findMany({ where: { businessId: business.id }})

                return { status: 'Success', message: 'User Income Fetched Successfully', businessIncome }
            } catch (error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        getLast30DaysIncome: async (_:any, __: any,  { user_id }: { user_id: number }) => {
            try {
                if (!user_id) throw new Error('Not Authorized')
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user || user.role !== "USER") throw new Error('Not Authorized')

                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) throw new Error(`Business with User Id : ${ user_id } Not Found`)
                
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

                return { status: 'Success', total}

            } catch(error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    },

    Mutation: {
        addIncome: async (_: any, { amount, description, category }: any, { user_id }: { user_id: number } ) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user || user.role !== "USER") throw new Error('Not Authorized')

                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) throw new Error(`Business with User Id : ${ user_id } Not Found`)
                
                const income = await prisma.income.create({
                    data:  { businessId: business.id, amount, description, category }
                })

                return { status: 'Success', message: 'Income Added Successfully' }

            } catch(error: any) {
                console.log(error.message)
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        updateIncome: async (_: any, { incomeId, amount, description, category }: any, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== "USER") {
                    return { status: "Error", message: "Not Authorized" };
                }
        
                const updatedIncome: any = {};
                if (amount !== undefined) updatedIncome.amount = amount;
                if (description !== undefined) updatedIncome.description = description;
                if (category !== undefined) updatedIncome.category = category;
        
                if (Object.keys(updatedIncome).length === 0) {
                    return { status: "Error", message: "No valid fields provided for update" };
                }
        
                await prisma.income.update({
                    where: { id: incomeId },
                    data: updatedIncome,
                });
        
        
                return { status: "Success", message: "Income Updated Successfully" };
            } catch (error: any) {
                console.error("Error updating income:", error);
        
                if (error.code === "P2025") {
                    return { status: "Error", message: "Income record not found" };
                }
        
                return { status: "Error", message: "An Internal Server Error Occurred" };
            }
    },
    deleteIncome: async (_: any, { incomeIds }: any, { user_id }: { user_id: number }) => {
        try {
            const user = await prisma.users.findUnique({ where: { id: user_id }});
            if (!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

            const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
            if(!business) return { status: 'Error', message: `Business with User Id : ${ user_id } Not Found`}

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
                status: 'Success', 
                message: `${ordersLength} Income Deleted Successfully`
            }
            
        } catch(error: any) {
            console.log(error)
            return { status: 'Error', message: 'An Internal Server Error Occured'}
        }
    }
    }
}

export default incomeResolvers;
