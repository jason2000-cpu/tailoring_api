import { Context } from "../../utils/types";
import { builder } from "../builder";
import { UserResponseRef } from "./types";


builder.queryFields((t) => ({
    users: t.field({
        type: UserResponseRef,
        args: {},
        authScopes: {
            isAuthenticated: true,
            isAdmin: true
        },
        resolve: async (parent: any, {}: any, ctx: Context) => {
            const { prisma } = ctx;
            try {

                const allUsers = await prisma.users.findMany({ 
                    include: { business: true }
                });

                return { 
                    success: true, 
                    message:"Successfully fetched all users",  
                    data: allUsers 
                }
                
            } catch(error: any){
                // console.log(error.message);
                return { 
                    success: false, 
                    message: error.message || 'Error While Getting All Users'
                }
            }            
        }
    }),

    user: t.field({
        type: UserResponseRef,
        args: {
            userId: t.arg.string({ required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isAdmin: true
        },
        resolve: async (parent: any, { userId }: any, ctx: Context) => {
            const { prisma } = ctx;
            try {
                const user = await prisma.users.findUnique({ 
                    where: { id: userId },
                    include: { 
                        business: {
                            include: { 
                                income: true, 
                                expenses: true, 
                                clients: true, 
                                financialRecords: true
                            }
                        } 
                    }
                });
    
                if (!user) throw new Error('User Not Found');
                // console.log("USER FOUND:::", user)
    
                return { success: true, message: "Successfully fetched user",  user}
            } catch (error: any) {
                return { 
                    success: false, 
                    message: error.message || 'An Internal Server Error Occured'
                }
            }            
        }
    })
}))
