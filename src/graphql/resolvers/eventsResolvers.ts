import prisma from '../../prisma/prismaClient'


const eventResolvers = {
    Query: {
        getAllUserEvents: async (_: any, __: any, { user_id } : { user_id: number }) => {
            try {
                if(!user_id) return { status: 'Error', message: 'Not Authorized'}
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user) return { status: 'Error', message: 'User Not Found'}
                
                const events = await prisma.events.findMany({ where: { userId : user_id }})

                return { status: 'Success', message: 'Events fetched successfully', events}
            } catch(error: any ) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },
    },

    Mutation: {
        addEvent: async (_: any, { title, start, end, description }: any, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user) return { status: 'Error', message: 'User Not Found'}

                await prisma.events.create({
                    data: { userId: user.id, title, start, end, description }
                })

                return { status: 'Success', message: 'Event Added Successfully'}
            } catch (error: any) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        updateEvent: async (_: any, { eventId, title, start, end, description }: any, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user) return { status: 'Error', message: 'User Not Found'}

                const eventToUpdate = await prisma.events.findUnique({ where: { id: eventId }})
                if(!eventToUpdate) return { status: 'Error', message: `Event with Id ${eventId} Not Found`}

                const eventUpdate: any = {}

                if(title) eventUpdate.title = title;
                if(start) eventUpdate.start = start;
                if(end) eventUpdate.end = end;
                if(description) eventUpdate.description = description;

                await prisma.events.update({
                    where: { id: eventId },
                    data: { userId: user.id, title, start, end, description }
                })

                return { status: 'Success', message: 'Event Updated Successfully'}
            } catch (error: any) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        },

        deleteEvent: async (_: any, { eventId }: { eventId: number }, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user) return { status: 'Error', message: 'User Not Found'}

                const eventToDelete = await prisma.events.findUnique({ where: { id: eventId }})
                if(!eventToDelete) return { status: 'Error', message: `Event with Id ${eventId} Not Found`}

                await prisma.events.delete({ where: { id: eventId }})

                return { status: 'Success', message: 'Event Deleted Successfully'}
            } catch(error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    }
}

export default eventResolvers;