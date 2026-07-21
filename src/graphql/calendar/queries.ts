import { Context } from "../../utils/types";
import { builder } from "../builder";
import { EventsResponseRef } from "./types";


builder.mutationFields((t) => ({
    getAllUserEvents: t.field({
        type: EventsResponseRef,
        args: {},
        authScopes: {
            isAuthenticated: true
        },
        resolve: async (parent: any, args: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                const events = await prisma.events.findMany({ 
                    where: { userId : user?.id }
                })

                return { success: true, message: 'Events fetched successfully', events}
            } catch(error: any ) {
                console.log(error);
                return { success: false, message: 'An Internal Server Error Occured'}
            }
        }
    })
}))
