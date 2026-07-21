import prisma from '../../lib/prismaClient';
import { PubSub } from "graphql-subscriptions"

const pubsub = new PubSub();


const notificationResolvers = {
    Query: {
        getNotifications: async (_:any, __: any, { user_id }: { user_id: number}) => {
            try {
                const user = prisma.users.findUnique({ where: { id: user_id }});
                if(!user) return { status: 'Error', message: `User With Id ${user_id} Not Found`};

                const notifications = prisma.notifications.findMany({ where: { userId: user_id }});

                return { status: 'Success', notifications };

            } catch(error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    },

    Mutation: {
        markNotificationAsRead: async (_: any, { id }: { id: number }, { user_id }: { user_id: number }) => {
            try {
                console.log("hello world")
            } catch(error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    }
}
