import { StorageService } from "../../services/storageService"
import prisma from '../../prisma/prismaClient';


const businessResolvers = {
    Query: {
        getBusinesses: async (_: any, __: any, { user_id }: { user_id: number}) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user || user.role !== 'ADMIN') return { status: 'Error', message: 'Not Authorized'}

                const businesses = await prisma.businesses.findMany();

                return { status: 'Success', message: 'Fetch Successful', businesses}

            } catch(error: any) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    },

    Mutation: {
        updateBusinessDetails: async (_: any, { businessId, name, phone, email, currency, address }: any, { user_id }: { user_id: number}) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const business = await prisma.businesses.findUnique({ where: { id: businessId }})
                if(!business) return { status: 'Error', message: `Business with Id ${ businessId} Not Found`}

                const updatedBusinessInfo: any = {};
                if(name) updatedBusinessInfo.name = name;
                if(phone) updatedBusinessInfo.phone = phone;
                if(email) updatedBusinessInfo.email = email;
                if(currency) updatedBusinessInfo.currency = currency;
                if(address) updatedBusinessInfo.address = address;

                await prisma.businesses.update({
                    where: { id: businessId},
                    data: updatedBusinessInfo
                })

                return { status: 'Success', message: 'Business Details Updated Successfully'}

            } catch(error: any) {
                console.log(error)
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        updateBusinessLogo: async(_: any, { businessId, logo }: any, { user_id }: { user_id: number})=> {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const business = await prisma.businesses.findUnique({ where: { id: businessId }})
                if(!business) return { status: 'Error', message: `Business with Id ${ businessId} Not Found`}

                if (logo) {
                    const key = await StorageService.uploadFile(logo, `${user_id}`);

                    await prisma.businesses.update({
                        where: { id: businessId },
                        data: { logo: key }
                    });
                } else {
                const key = await StorageService.uploadFile(logo, `${user_id}`);

                await prisma.businesses.update({
                    where: { id: businessId },
                    data: { logo: null }
                });
                }

                return { status: "Success", message: "Business Profile Picture Updated Successfully"}
            } catch (error) {
                
            }
        },

        deleteBusiness: async (_: any, { businessId }: { businessId: number }, { user_id }: { user_id: number}) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const business = await prisma.businesses.findUnique({ where: { id: businessId }})
                if(!business) return { status: 'Error', message: `Business with Id ${ businessId} Not Found`}

                await prisma.businesses.delete({ where: { id: businessId }})

                return { status: 'Success', message: 'Business Details Deleted Successfully'}

            } catch(error: any) {
                console.log(error)
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    }
}

export default businessResolvers;
