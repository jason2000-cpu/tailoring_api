import { Context } from "../../utils/types";
import { builder } from "../builder";
import { addClientInput, BusinessClientsResponseRef } from "./types";


builder.mutationFields((t) => ({
    addClient: t.field({
        type: BusinessClientsResponseRef,
        args: {
            input: t.arg({ type: addClientInput,   required: true })
        },
        authScopes: { 
            isAuthenticated: true, 
            isUser: true 
        },
        resolve: async (parent: any, {input }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            const { Fname, Sname, email, phone, measurements } = input;

            try {

                const business = await prisma.businesses.findUnique({
                    where: { 
                        userId: user?.id
                    }
                });

                if(!business) return { 
                    success: false, 
                    message:`Business with User Id : ${ user?.id } Not Found`
                }

                const findClient = await prisma.clients.findUnique({ where: { phone }})
                if(findClient) return {
                    success: false,  
                    message: `A Customer with phone number ${phone} already exists`
                }

                const client = await prisma.clients.create({
                    data: { Fname, Sname, email, phone, businessId: business.id }
                })

                if(measurements) {
                    await prisma.measurements.create({
                        data: {
                            clientId: client.id,
                            ...measurements
                        }
                    })
                }

                return { success: true , message: 'Customer Added Successfully' }
            } catch (error: any) {
                console.log(error);
                return { success: false, message: 'An Internal Server Error Occured'}
            }
        }
    }),

    updateClient: t.field({
        type: BusinessClientsResponseRef,
        args: {
            clientId: t.arg.string({ required: true }), 
            input: t.arg({ type: addClientInput })
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { clientId, input }: any, ctx: Context) => {
            const { prisma, user } = ctx;

            try {
                const { Fname, Sname, email, phone, measurements } = input;

                const updatedClient: any = {};

                if(Fname) updatedClient.Fname = Fname;
                if(Sname) updatedClient.Sname = Sname;
                if(email) updatedClient.email = email;
                if(phone) updatedClient.phone = phone;

                await prisma.clients.update({
                    where: { id: clientId },
                    data: {...updatedClient}
                })

                if(measurements) {
                    const { height, shoulders, hand, chest, waist, hips } = measurements;

                    const updatedMeasurements: any = {}

                    if(height) updatedMeasurements.height = height;
                    if(shoulders) updatedMeasurements.shoulders = shoulders;
                    if(hand) updatedMeasurements.hand = hand;
                    if(chest) updatedMeasurements.chest = chest;
                    if(waist) updatedMeasurements.waist = waist;
                    if(hips) updatedMeasurements.hips = hips;

                    const clientMeasurements = await prisma.measurements.findUnique({ 
                        where: {  clientId }
                    })

                    if(!clientMeasurements) {
                        await prisma.measurements.create({
                            data: {
                                clientId,
                                ...measurements
                            }
                        })
        
                    } else {
                        await prisma.measurements.update({
                            where: { clientId },
                            data: {...updatedMeasurements}
                        })
    
                    }
                }

                return { success: true, message: 'Customer Updated Successfully' }

            } catch(error: any) {
                console.log(error);
                return { success: false, message: 'An Internal Server Error Occured'}
            }            
        }
    }),

    deleteClient: t.field({
        type: BusinessClientsResponseRef,
        args: {
            clientIds: t.arg.stringList({ required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { clientIds }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {

                const business = await prisma.businesses.findUnique({ 
                    where: { userId: user?.id }
                });
                if(!business) throw new Error(`Business with User Id : ${ user?.id } Not Found`)

                await prisma.clients.deleteMany({ 
                    where: { 
                        id: {
                            in: clientIds,
                        } 
                    }
                });

                const clientsLength = clientIds.length;
                return { 
                    success: true, 
                    message: `${clientsLength} ${ clientsLength == 1 ? 'Client' : 'Clients'} Deleted Successfully`
                }
                
            } catch (error: any) {
                console.log(error);
                return { success: false, message: 'An Internal Server Error Occured'}
            }            
        }
    })
}))
