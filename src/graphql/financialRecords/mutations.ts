import { Context } from "../../utils/types";
import { builder } from "../builder";
import { FinancialRecordResponseRef } from "./types";


builder.mutationFields((t) => ({
    deleteFinancialRecord: t.field({
        type: FinancialRecordResponseRef,
        args: {
            id: t.arg.string({ required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isUser: true
        },
        resolve: async (parent: any, { id }: any, ctx: Context) => {
            const { prisma } = ctx;
            try {
                const financialRecord = await prisma.financialRecord.findUnique({ 
                    where: { id }
                })
                if (!financialRecord) return { 
                    success: false,
                    message: `Financial Record With id ${ id } Not Found`
                }
                
                await prisma.financialRecord.delete({ where: { id }})
                return { 
                    success: true, 
                    message: 'Financial Record Deleted Successfully'
                }

            } catch(error: any) {
                console.log(error);
                return { 
                    success: false, 
                    message: 'An Internal Server Error Occured'
                }
            }            
        }
    })
}))
