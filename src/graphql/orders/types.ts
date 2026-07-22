import { Orders } from "../../generated/prisma";
import { ApiResponse } from "../../utils/types";
import { builder } from "../builder";
import { CompletionStatusEnum } from "../enums";


const OrderModel = builder.prismaObject('Orders', {
    fields: (t) => ({
        id: t.exposeID('id'),
        clientId: t.exposeID('clientId'),
        completionStatus: t.expose('completionStatus', { type: CompletionStatusEnum }),
        description: t.exposeString('description'),
        item: t.exposeString('item'),
        collectionDate: t.expose('collectionDate', { type: 'DateTime' }),
        client: t.relation('client'),
        // payments: t.relation('payments')
    })
})

export const addOrderInput = builder.inputType('addOrderInput', {
    fields: (t) => ({
        customerId: t.string({ required: true}),
        item: t.string({ required: true}),
        description: t.string({}),
        completionStatus: t.field({ 
            type: CompletionStatusEnum, 
            required: true
        }), 
        collectionDate: t.field({ 
            type: 'DateTime', 
            required: true 
        }),
        // payments: t.field({
        //     type: Paym
        // })
    })
})

export const BusinessOrdersResponseRef = builder.objectRef<ApiResponse>('BusinessOrdersResponseRef').implement({
    fields: (t) => ({
        success: t.exposeBoolean('success', { nullable: false }),
        message: t.exposeString('message'),
        data: t.field({
            type: OrderModel,
            nullable: true,
            resolve: (parent) => parent.data as Orders || null
        })
    })
})
