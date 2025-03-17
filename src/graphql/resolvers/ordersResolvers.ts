import prisma from '../../prisma/prismaClient'
import getUniqueIds from '../../utils/getUniqueIds';


const ordersResolvers = {
    Query: {
        getBusinessOrders: async (_:any, __: any, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if (!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) return { status: 'Error', message: `Business with User Id : ${ user_id } Not Found`}

                const businessOrders = await prisma.orders.findMany({
                    where: { businessId: business.id },
                    include: { client: true, payments: true}
                })

                return { status: 'Success', message: 'Orders Fetched Successfully', businessOrders }
            } catch (error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },
        getOrder: async (_:any, { clientId }: { clientId: number}, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if (!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}
    
                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) return { status: 'Error', message: `Business with User Id : ${ user_id } Not Found`}

                const orders = await prisma.orders.findMany({where: { clientId }, include: { payments: true }})

                if(!orders) return { status: 'Error', message: `No Order Found For Client with Id ${ clientId }`}

                return { status: 'Success', message: 'Order Fetched Successfully', orders }

            } catch(error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    },

    Mutation: {
        addOrder: async (_:any, { input }: any, { user_id }: { user_id: number }) => {
            const { customerId, item,  description, completionStatus, collectionDate, payments } = input;

            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if (!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) return { status: 'Error', message: `Business with User Id : ${ user_id } Not Found`}

                const customer = await prisma.clients.findUnique({ where: { id: customerId }})
                if(!customer) return { status: 'Error', message: `Customer with Id : ${ customerId } Not Found`}

                const client = await prisma.clients.findUnique({ where: { id: customerId }})
                if(!client) return { status: 'Error', message: `Customer With Id ${customerId} Not Found`}

                // update activeOrder status for client
                const activeOrderUpdate = await prisma.clients.update({ 
                    where: {id: customerId}, 
                    data: { activeOrder: true }
                });
                console.log("ACTIVE ORDER STATUS UPDATED::", activeOrderUpdate)

                // create order
                const order = await prisma.orders.create({
                    data: { businessId: business.id, item,  clientId: customerId, description, completionStatus, collectionDate }
                })
                
                // create order collection event
                await prisma.events.create({
                    data: {
                        userId: user_id,
                        title: `Order Collection - ${customer.Fname} ${customer.Sname} will be collecting their ${item}`,
                        description: `Order collectiion of ${item} by ${customer.Fname} ${customer.Sname} `,
                        start: collectionDate,
                        end: collectionDate
                    }
                })

                // console.log("ADDING PAYMENTS:::", payments, payments.totalAmount, payments.paidAmount)
                if (payments) {
                    const { totalAmount, paidAmount } = payments;
                    if (totalAmount === paidAmount ) {
                        await prisma.income.create({
                            data:  { 
                                businessId: business.id, 
                                amount: totalAmount, 
                                description: `Sold a ${item} to ${customer.Fname} ${customer.Sname} on ${new Date().toDateString()}`, 
                                category: "Customer Orders" 
                            }
                        })
                    }
                    await prisma.payments.create({
                        data: {...payments, orderId: order.id }
                    })
                }

                return { status: 'Success', message: 'Customer Oder Created Successfully'}

            } catch (error: any) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        updateOrder: async (_:any, { input }: any, { user_id }: { user_id: number }) => {
            const { orderId, description, completionStatus, collectionDate, payments } = input;

            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if (!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const order = await prisma.orders.findUnique({ where: { id: orderId }, include: { client: true }});
                if(!order) return { status: 'Error', message: `Order with Id ${orderId} Not Found`}


                const updatedOrder: any = {}
                if(description) updatedOrder.description = description;
                if(completionStatus) updatedOrder.completionStatus = completionStatus;
                if(collectionDate) updatedOrder.collectionDate = collectionDate;

                await prisma.orders.update({ 
                    where: { id: orderId },
                    data: updatedOrder
                })

                if(payments) {
                    const orderPayment = await prisma.payments.findUnique({ where: { orderId }})

                    const { totalAmount, paidAmount } = payments;
                    if (totalAmount === paidAmount ) {
                        await prisma.income.create({
                            data:  { 
                                businessId: order.businessId, 
                                amount: totalAmount, 
                                description: `Sold a ${order.item} to ${order.client.Fname} ${order.client.Sname}`, 
                                category: "Customer Orders" 
                            }
                        })
                    }

                    if(!orderPayment) {
                        await prisma.payments.create({
                            orderId,
                            ...payments
                        })
                    } else {
                        const updatedPayments: any = {}
                        
                        if(payments.totalAmount) updatedPayments.totalAmount = payments.totalAmount;
                        if(payments.paidAmount) updatedPayments.paidAmount = payments.paidAmount;

                        await prisma.payments.update({
                            where: { orderId },
                            data: {...updatedPayments}
                        })
                    }
                }

                return { status: 'Success', message: 'Customer Order Updated Successfully'}

            } catch (error: any) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        addPayment: async(_:any, { orderId, paidAmount, totalAmount }: any, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if (!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const order = await prisma.orders.findUnique({ where: { id: orderId }, include: { client: true }})
                if(!order) return { status: 'Error', message: `Order with Id ${orderId} Not Found`}

                if (totalAmount === paidAmount) {
                    await prisma.income.create({
                        data:  { 
                            businessId: order.businessId, 
                            amount: totalAmount, 
                            description: `Sold a ${order.item} to ${order.client.Fname} ${order.client.Sname}`, 
                            category: "Customer Orders" 
                        }
                    })
                }


                const orderPayment = await prisma.payments.findUnique({ where: { orderId }});
                if(!orderPayment) {
                    await prisma.payments.create({
                        data: { orderId, paidAmount, totalAmount }
                    })
                } else {
                    await prisma.payments.update({ 
                        where: { orderId },
                        data: { paidAmount, totalAmount}
                    })
                }

                return { status: 'Success', message: 'Payments Updated Successfully'}

            } catch(error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        deleteOrder: async (_: any, { orderIds }: { orderIds: string[] }, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if (!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) return { status: 'Error', message: `Business with User Id : ${ user_id } Not Found`}

                const integerOrderIds = orderIds.map((id) => parseInt(id, 10)).filter((id) => !isNaN(id));

                // check if a client has multiple orders so as to change active order status
                for (let i in integerOrderIds) {
                    const order = await prisma.orders.findUnique({ where: { id: Number(integerOrderIds[i]) }});
                    // console.log("ORDER FOUND ON LOOP", order, "ID:::", integerOrderIds[i])
                    const clientId = order?.clientId;
                    const clientOrdersCount = await prisma.orders.count({ 
                        where: { 
                            clientId, 
                            completionStatus:  { in: [ 'InProgress', 'InProgress']}
                        }
                    })

                    if ( clientOrdersCount === 1 ) {
                        await prisma.clients.update({
                            where: { id: clientId},
                            data: { activeOrder: false }
                        })
                    } else {
                        continue;
                    }
                    
                }

                await prisma.orders.deleteMany({
                    where: {
                        id: {
                            in: integerOrderIds,
                        }
                    }
                });

                const ordersLength = orderIds.length;
                return {
                    status: 'Success', 
                    message: `${ordersLength} ${ ordersLength == 1 ? 'Order' : 'Orders'} Deleted Successfully`
                }
                
            } catch (error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    }
}

export default ordersResolvers;