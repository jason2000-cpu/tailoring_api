import { Expenses } from "../../generated/prisma";
import { ApiResponse } from "../../utils/types";
import { builder } from "../builder";


const ExpenseModel = builder.prismaObject('Expenses', {
        fields: (t) => ({
            id: t.exposeID('id'),
            businessId: t.exposeID('businessId'),
            category: t.exposeString('category'),
            amount: t.exposeFloat('amount'),
            description: t.exposeString('description'),
            createdAt: t.expose('createdAt', { type: 'DateTime' })
    })
})

export const addExpenseInput = builder.inputType('addExpenseInput', {
    fields: (t) => ({
        category: t.string({ required: true }), 
        amount: t.float({ required: true }), 
        description: t.string(),
    })
})

export const ExprensesResponseRef = builder.objectRef<ApiResponse>('ExprensesResponseRef').implement({
    fields: (t) => ({
        success: t.exposeBoolean('success', { nullable: false }),
        message: t.exposeString('message', { nullable: false }),
        data: t.field({
            type: ExpenseModel,
            nullable: true,
            resolve: (parent) => parent.data as Expenses || null
        })
    })
})
