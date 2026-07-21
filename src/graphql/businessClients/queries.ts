import { Context } from "../../utils/types";
import { builder } from "../builder";
import { BusinessClientsResponseRef } from "./types";


builder.queryFields((t) => ({
    getBusinessClients: t.field({
        type: BusinessClientsResponseRef,
        args: { },
        authScopes: { isUser: true },
        resolve: async (parent: any, { }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                
                const business = await prisma.businesses.findUnique({ where: { userId: user?.id! }});
                if(!business) throw new Error(`Business with User Id : ${ user?.id } Not Found`)

                const businessClients = await prisma.clients.findMany({ 
                    where: { businessId: business.id },
                    include: { measurements: true }
                })

                return { success: true , message: 'Clients fetched successfully', data: businessClients }
            } catch(error: any) {
                console.log(error);
                return { success: false, message: 'An Internal Server Error Occured'}
            }            
        }
    })
}))
