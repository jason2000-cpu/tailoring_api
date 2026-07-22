import { Income } from "../../generated/prisma";
import { ApiResponse } from "../../utils/types";
import { builder } from "../builder";


const IncomeModel = builder.prismaObject('Income', {
    fields: (t) => ({
        id: t.exposeID('id'),
        businessId: t.exposeID('businessId'),
        amount: t.exposeFloat('amount'),
        category: t.exposeString('category'),
        description: t.exposeString('description'),
        createdAt: t.expose('createdAt', { type: 'DateTime' })
    })
})

export const addIncomeInput = builder.inputType('addIncomeInput', {
    fields: (t) => ({
        category: t.string({ required: true }), 
        amount: t.float({ required: true }), 
        description: t.string(),
    })
})

export const IncomeResponseRef = builder.objectRef<ApiResponse>('IncomeResponseRef').implement({
    fields: (t) => ({
        success: t.exposeBoolean('success', { nullable: false }),
        message: t.exposeString('message', { nullable: false }),
        data: t.field({
            type: IncomeModel,
            nullable: true,
            resolve: (parent) => parent.data as Income || null
        })
    })
})
