import { StorageService } from "../../services/storageService";
import { Context } from "../../utils/types";
import { builder } from "../builder";
import { BusinessResponseRef, BusinessUpdateInput } from "./types";


builder.mutationFields((t) => ({
    updateBusinessDetails: t.field({
        type: BusinessResponseRef,
        args: {
            input: t.arg({ type: BusinessUpdateInput, required: true })
        },
        authScopes: { isAuthenticated: true },
        resolve: async (parent: any, { input }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                const { businessId, phone,name, email, currency, address } = input;
                
                const business = await prisma.businesses.findUnique({ where: { id: businessId }})
                if(!business) return { success: false, message: `Business with Id ${ businessId} Not Found`}

                if (business.userId !== user?.id!) {
                    return { success: false, message: 'Not authorized to update business details'}
                }

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

                return { success: true , message: 'Business Details Updated Successfully'}

            } catch(error: any) {
                console.log(error)
                return { success: false, message: 'An Internal Server Error Occured'}
            }            
        }
    }),

    updateBusinessLogo: t.field({
        type: BusinessResponseRef,
        args: {
            logo: t.arg({ type: 'Upload', required: true })
        },
        authScopes: { isUser: true },
        resolve: async (parent: any, { logo }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                
                const business = await prisma.businesses.findUnique({ where: { userId: user?.id }})
                if(!business) return { success: false, message: `Business Not Found`}

                if (logo) {
                    const key = await StorageService.uploadFile(logo, user?.id!);

                    await prisma.businesses.update({
                        where: { id: business.id },
                        data: { logo: key }
                    });
                }

                return { success: true, message: "Business Profile Picture Updated Successfully"}
            } catch (error: any) {
                return { success: false, message: error.message || 'An Unknown Error Occured'}
            }            
        }
    })
}))
