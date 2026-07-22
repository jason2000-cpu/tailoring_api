import { Context } from "../../utils/types";
import { builder } from "../builder";
import { NotificationsResponseRef } from "./types";


builder.queryFields((t) => ({
    getNotifications: t.field({
        type: NotificationsResponseRef,
        args: {},
        authScopes: { isAuthenticated: true },
        resolve: async (parent: any, args: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {

                const notifications = prisma.notifications.findMany({ 
                    where: { userId: user?.id }
                });

                return { 
                    success: true,
                    message: "Notifications fetched successfully", 
                    data: notifications 
                };

            } catch(error: any) {
                console.log(error.message);
                return { 
                    success: false, 
                    message: error.message ||  'An Internal Server Error Occured'
                }
            }
        }
    })
}))
