import { Context } from "../../utils/types";
import { builder } from "../builder";
import { NotificationsResponseRef } from "./types";


builder.mutationFields((t) => ({
    markNotificationAsRead: t.field({
        type: NotificationsResponseRef,
        args: {},
        authScopes: { isAuthenticated: true },
        resolve: async (parent: any, {}: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {

                const notifications = prisma.notifications.findMany({ 
                    where: { userId: user?.id }
                });

                return { 
                    success: true,
                    message: "Successfully marked as read",
                    data: notifications 
                };

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
