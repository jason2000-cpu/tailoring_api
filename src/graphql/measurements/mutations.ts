import { Context } from "../../utils/types";
import { builder } from "../builder";
import { addMeasurementsInput, MeasurementsResponseRef } from "./types";


builder.mutationFields((t) => ({
    addMeasurements: t.field({
        type: MeasurementsResponseRef,
        args: {
            input: t.arg({ type: addMeasurementsInput, required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isAdmin: true,
        },
        resolve: async (parent: any, { input }: any, ctx: Context) => {
            const { prisma } = ctx;
            try {
                const { clientId,  } = input;
                
                const client = await prisma.clients.findUnique({ 
                    where: { id: clientId }
                });

                if(!client) return { 
                        success: false, 
                        message: `Client With Id ${clientId} Not Found`
                    }

                await prisma.measurements.create({
                    data: {...input}
                })

                return { success: true, message: 'Measurements Added Successfully'}
            }catch(error: any) {
                console.log(error.message);
                return { 
                    success: false, 
                    message: error.message || 'An Internal Server Error Occured'
                }
            }         
        }
    })
}))
