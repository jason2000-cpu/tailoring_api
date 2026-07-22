import { FinancialRecord } from "../../generated/prisma";
import { ApiResponse } from "../../utils/types";
import { builder } from "../builder";
import { GroupByEnum } from "../enums";


const FinancialRecordModel = builder.prismaObject('FinancialRecord', {
    fields: (t) => ({
        id: t.exposeID('id'),
        businessId: t.exposeID('businessId'),
        income: t.exposeFloat('income'),
        expenses: t.exposeFloat('expenses'),
        profit: t.exposeFloat('profit'),
        date: t.expose('date', { type: 'DateTime' }),
        createdAt: t.expose('createdAt', { type: 'DateTime' }),
        updatedAt: t.expose('updatedAt', { type: 'DateTime' })
    })
})


export const GetFinancialSummaryInput = builder.inputType('getFinancialSummaryInput', {
    fields: (t) => ({
        groupBy: t.field({
            type: GroupByEnum,
            required: true
        }), 
        startDate: t.field({ 
            type: 'DateTime'
        }), 
        endDate: t.field({ 
            type: 'DateTime'
        }),
    })
})

export const FinancialRecordResponseRef = builder.objectRef<ApiResponse>('FinancialRecordResponseRef').implement({
    fields: (t) => ({
        success: t.exposeBoolean('success', { nullable: false }),
        message: t.exposeString('message', { nullable: false }),
        data: t.field({
            type: FinancialRecordModel,
            nullable: true,
            resolve: (parent) => parent.data as FinancialRecord || null
        })
    })
})
