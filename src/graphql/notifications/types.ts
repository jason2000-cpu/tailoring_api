import { Notifications } from "../../generated/prisma";
import { ApiResponse } from "../../utils/types";
import { builder } from "../builder";


const NotificationsModel = builder.prismaObject('Notifications', {
    fields: (t) => ({
        id: t.exposeID('id'),
        userId: t.exposeID('userId'),
        read: t.exposeBoolean('read'),
        message: t.exposeString('message'),
        type: t.exposeString('type'),
        createdAt: t.expose('createdAt', { type: 'DateTime' })
    })
})


export const NotificationsResponseRef = builder.objectRef<ApiResponse>('NotificationsResponseRef').implement({
    fields: (t) => ({
        success: t.exposeBoolean('success', { nullable: false }),
        message: t.exposeString('message'),
        data: t.field({
            type: NotificationsModel,
            nullable: true,
            resolve: (parent) => parent.data as Notifications || null
        })
    })
})
