import { Context } from "../../utils/types";
import { builder } from "../builder";
import { addClientInput } from "../businessClients/types";
import { addEventInput, EventsResponseRef } from "./types";


builder.mutationFields((t) => ({
    addEvent: t.field({
        type: EventsResponseRef,
        args: {
            input: t.arg({ type: addEventInput, required: true,  })
        },
        authScopes: {
            isAuthenticated: true,
        },
        resolve: async (parent: any, { input }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                const { title, start, end, description } = input;

                await prisma.events.create({
                    data: { 
                        userId: user?.id!, 
                        title, start, end, description 
                    }
                })

                return { success: true, message: 'Event Added Successfully'}
            } catch (error: any) {
                console.log(error);
                return { success: false, message: 'An Internal Server Error Occured'}
            }            
        }
    }),

    updateEvent: t.field({
        type: EventsResponseRef,
        args: {
            eventId: t.arg.string({ required: false }),
            input: t.arg({ type: addClientInput  })
        },
        authScopes: {
            isAuthenticated: true,
        },
        resolve: async (parent: any, { eventId, input }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                const { title, start, end, description } = input;

                const eventToUpdate = await prisma.events.findUnique({ where: { id: eventId }})
                if(!eventToUpdate) return { 
                    success: false, 
                    message: `Event with Id ${eventId} Not Found`
                }

                const eventUpdate: any = {}

                if(title) eventUpdate.title = title;
                if(start) eventUpdate.start = start;
                if(end) eventUpdate.end = end;
                if(description) eventUpdate.description = description;

                await prisma.events.update({
                    where: { id: eventId },
                    data: { 
                        userId: user?.id, 
                        title, start, end, description 
                    }
                })

                return { success: true, message: 'Event Updated Successfully'}
            } catch (error: any) {
                console.log(error);
                return { success: false, message: 'An Internal Server Error Occured'}
            }            
        } 
    }),

    deleteEvent: t.field({
        type: EventsResponseRef,
        args: {
            eventId: t.arg.string({ required: true })
        },
        authScopes: {
            isAuthenticated: true
        },
        resolve: async (parent: any, { eventId }: any, ctx: any) => {
            const { prisma, user } = ctx;
            try {

                const eventToDelete = await prisma.events.findUnique({ 
                    where: { id: eventId }
                })
                if(!eventToDelete) return { 
                    success: false, 
                    message: `Event with Id ${eventId} Not Found`
                }

                await prisma.events.delete({ where: { id: eventId }})

                return { success: true, message: 'Event Deleted Successfully'}
            } catch(error: any) {
                console.log(error.message);
                return { success: false, message: 'An Internal Server Error Occured'}
            }            
        }
    })
}))
