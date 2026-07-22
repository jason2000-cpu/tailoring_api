import { Context } from "../../utils/types";
import { builder } from "../builder";
import { BusinessOrdersResponseRef } from "./types";


builder.queryFields((t) => ({
    getBusinessOrders: t.field({
        type: BusinessOrdersResponseRef,
        args: {},
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, {}: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {

                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id }
                });
                if(!business) return { 
                    success: false, 
                    message: `Business with User Id : ${ user?.id } Not Found`
                }

                const businessOrders = await prisma.orders.findMany({
                    where: { businessId: business.id },
                    include: { client: true, payments: true}
                })

                return { 
                    success: true, 
                    message: 'Orders Fetched Successfully', 
                    data: businessOrders 
                }
            } catch (error: any) {
                console.log(error.message);
                return { 
                    success: false, 
                    message: 'An Internal Server Error Occured'
                }
            }            
        }
    }),

    getOrder: t.field({
        type: BusinessOrdersResponseRef,
        args: {
            clientId: t.arg.string({ required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { clientId }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
    
                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id }
                });
                if(!business) return { 
                    success: false, 
                    message: `Business with User Id : ${ user?.id } Not Found`
                }

                const orders = await prisma.orders.findMany({
                    where: { clientId }, 
                    include: { payments: true }
                })

                if(!orders) return { 
                    success: false, 
                    message: `No Order Found For Client with Id ${ clientId }`
                }

                return { success: true, message: 'Order Fetched Successfully', orders }

            } catch(error: any) {
                console.log(error.message);
                return { 
                    success: false, 
                    message: 'An Internal Server Error Occured'
                }
            }            
        }
    })
}))
