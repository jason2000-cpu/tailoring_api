import { Context } from "../../utils/types";
import { builder } from "../builder";
import { addOrderInput, BusinessOrdersResponseRef } from "./types";


builder.mutationFields((t) => ({
    addOrder: t.field({
        type: BusinessOrdersResponseRef,
        args: {
            input: t.arg({ type: addOrderInput , required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { input }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            const { customerId, item,  description, completionStatus, collectionDate, payments } = input;

            try {

                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id }
                });
                if(!business) return { 
                    success: false, 
                    message: `Business with User Id : ${ user?.id } Not Found`
                }

                const customer = await prisma.clients.findUnique({ 
                    where: { id: customerId }
                })
                if(!customer) return { 
                    success: false, 
                    message: `Customer with Id : ${ customerId } Not Found`
                }

                const client = await prisma.clients.findUnique({ 
                    where: { id: customerId }
                })
                if(!client) return { 
                    success: false, 
                    message: `Customer With Id ${customerId} Not Found`
                }

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
                        userId: user?.id!,
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

                return { success: true, message: 'Customer Oder Created Successfully'}

            } catch (error: any) {
                console.log(error);
                return { success: false, message: 'An Internal Server Error Occured'}
            }        
        }
    }),

    updateOrder: t.field({
        type: BusinessOrdersResponseRef,
        args: {},
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, {input}: any, ctx: Context) => {
            const { prisma, user } = ctx;

            try {
                const { orderId, description, completionStatus, collectionDate, payments } = input;

                const order = await prisma.orders.findUnique({ 
                    where: { id: orderId }, 
                    include: { client: true }
                });
                if(!order) return { 
                    success: false, 
                    message: `Order with Id ${orderId} Not Found`
                }

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

                return { success: true, message: 'Customer Order Updated Successfully'}

            } catch (error: any) {
                console.log(error);
                return { 
                    success: false, 
                    message: error.message || 'An Internal Server Error Occured'
                }
            }            
        }
    }),

    addPayment: t.field({
        type: BusinessOrdersResponseRef,
        args: {
            orderId: t.arg.string({ required: true }), 
            paidAmount: t.arg.float({}), 
            totalAmount: t.arg.float({})
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { orderId, paidAmount, totalAmount }: any, ctx: Context) => {
            const { prisma } = ctx;
            try {
                const order = await prisma.orders.findUnique({ 
                    where: { id: orderId }, 
                    include: { client: true }
                })
                if(!order) return { 
                    success: false, 
                    message: `Order with Id ${orderId} Not Found`
                }

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


                const orderPayment = await prisma.payments.findUnique({ 
                    where: { orderId }
                });
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

                return { success: true, message: 'Payments Updated Successfully'}

            } catch(error: any) {
                console.log(error.message);
                return { success: false, message: 'An Internal Server Error Occured'}
            }
        }
    }),

    deleteOrder: t.field({
        type: BusinessOrdersResponseRef,
        args: {
            orderIds: t.arg.stringList({ required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { orderIds }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {

                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id}
                });
                if(!business) return { 
                    success: false, 
                    message: `Business with User Id : ${ user?.id } Not Found`
                }

                // check if a client has multiple orders so as to change active order status
                for (let i in orderIds) {
                    const order = await prisma.orders.findUnique({ 
                        where: { id: orderIds[i] }
                    });
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
                            in: orderIds,
                        }
                    }
                });

                const ordersLength = orderIds.length;
                return {
                    success: true, 
                    message: `${ordersLength} ${ ordersLength == 1 ? 'Order' : 'Orders'} Deleted Successfully`
                }
                
            } catch (error: any) {
                console.log(error.message);
                return { success: false, message: 'An Internal Server Error Occured'}
            }
        }
    })

}))
