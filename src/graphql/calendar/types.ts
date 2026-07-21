import { Events } from "../../generated/prisma";
import { ApiResponse } from "../../utils/types";
import { builder } from "../builder";


const EventsModel = builder.prismaObject('Events', {
    fields: (t) => ({
        id: t.exposeID('id'),
        title: t.exposeString('title'),
        start: t.expose('start', { type: 'DateTime' }),
        end: t.expose('end', { type: 'DateTime' }),
        description: t.exposeString('description'),
        userId: t.exposeID('userId')
    })
})

export const addEventInput = builder.inputType('addEventInput', {
    fields: (t) => ({
        title: t.string({ required: true }), 
        start: t.string({ required: true }), 
        end: t.string({ required: true }), 
        description: t.string(),
    })
})

export const EventsResponseRef = builder.objectRef<ApiResponse>('EventsResponseRef').implement({
    fields: (t) => ({
        success: t.exposeBoolean('success', { nullable: false }),
        message: t.exposeString('message', { nullable: false }),
        data: t.field({
            type: EventsModel,
            nullable: true,
            resolve: (parent) => parent.data as Events || null
        })
    })
})
