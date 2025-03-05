import prisma from '../../prisma/prismaClient'


const clientResolvers = {
    Query: {
        getBusinessClients: async (_: any, __: any, { user_id } : { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }})
                if (!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) throw new Error(`Business with User Id : ${ user_id } Not Found`)

                const businessClients = await prisma.clients.findMany({ 
                    where: { businessId: business.id },
                    include: { measurements: true }
                })

                return { status: 'Success', message: 'Clients fetched successfully', businessClients }
            } catch(error: any) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    },

    Mutation : {
        addClient: async (_: any, { input }: any, { user_id }: { user_id: number }) => {
            const { Fname, Sname, email, phone, measurements } = input;

            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if (!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) return { status: 'Error', message:`Business with User Id : ${ user_id } Not Found`}

                const findClient = await prisma.clients.findUnique({ where: { phone }})
                if(findClient) return {status: 'Error', message: `A Customer with phone number ${phone} already exists`}

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

                return { status: 'Success', message: 'Customer Added Successfully' }
            } catch (error: any) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        updateClient: async (_: any, { input }: any, { user_id }: { user_id: number }) => {
            const { id, Fname, Sname, email, phone, measurements } = input;

            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized' }

                const updatedClient: any = {};

                if(Fname) updatedClient.Fname = Fname;
                if(Sname) updatedClient.Sname = Sname;
                if(email) updatedClient.email = email;
                if(phone) updatedClient.phone = phone;

                await prisma.clients.update({
                    where: { id: Number(id) },
                    data: {...updatedClient}
                })

                if(measurements) {
                    const { height, shoulders, hand, chest, waist, hips } = measurements;
                    console.log(height, shoulders, hand, chest, waist, hips);

                    const updatedMeasurements: any = {}

                    if(height) updatedMeasurements.height = height;
                    if(shoulders) updatedMeasurements.shoulders = shoulders;
                    if(hand) updatedMeasurements.hand = hand;
                    if(chest) updatedMeasurements.chest = chest;
                    if(waist) updatedMeasurements.waist = waist;
                    if(hips) updatedMeasurements.hips = hips;

                    const clientMeasurements = await prisma.measurements.findUnique({ where: { clientId: Number(id)}})

                    if(!clientMeasurements) {
                        await prisma.measurements.create({
                            data: {
                                clientId: Number(id),
                                ...measurements
                            }
                        })
        
                    } else {
                        await prisma.measurements.update({
                            where: { clientId: Number(id) },
                            data: {...updatedMeasurements}
                        })
    
                    }
                }

                return { status: 'Success', message: 'Customer Updated Successfully' }

            } catch(error: any) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        deleteClient: async (_: any, { clientIds }: { clientIds: string[]}, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id : user_id }});
                if(!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const business = await prisma.businesses.findUnique({ where: { userId: user_id}});
                if(!business) throw new Error(`Business with User Id : ${ user_id } Not Found`)

                const integerClientIds = clientIds.map((id) => parseInt(id, 10)).filter((id) => !isNaN(id))

                await prisma.clients.deleteMany({ 
                    where: { 
                        id: {
                            in: integerClientIds,
                        } 
                    }
                });

                const clientsLength = clientIds.length;
                return { 
                    status: 'Success', 
                    message: `${clientsLength} ${ clientsLength == 1 ? 'Client' : 'Clients'} Deleted Successfully`
                }
                
            } catch (error: any) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    }
}

export default clientResolvers;