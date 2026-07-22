import { Businesses } from "../../generated/prisma";
import { builder } from "../builder";
import { ApiResponse } from "../../utils/types";


export const BusinessModel = builder.prismaObject('Businesses', {
    fields: (t) => ({
        id: t.exposeString('id'),
        name: t.exposeString('name'),
        email: t.exposeString('email'),
        phone: t.exposeString('phone'),
        currency: t.exposeString('currency'),
        address: t.exposeString('address'),
        logo: t.exposeString('logo'),
        clients: t.relation('clients'),
        financialRecords: t.relation('financialRecords'),
        expenses: t.relation('expenses'),
        income: t.relation('income'),
    })
})

export const BusinessUpdateInput = builder.inputType('BusinessUpdateInput', {
    fields: (t) => ({
        businessId: t.string({ required: true }),
        name: t.string(),
        phone: t.string(), 
        email: t.string(), 
        currency: t.string(), 
        address: t.string()
    })
})

export const CreateBusinessInput = builder.inputType('CreateBusinessInput', {
    fields: (t) => ({
        name: t.string({ required: true }),
        email: t.string({ required: true }),
        phone: t.string({ required: true }),
        currency: t.string({ required: true }),
        address: t.string({ required: true })
    })
})

export const BusinessResponseRef = builder.objectRef<ApiResponse>('BusinessResponseRef').implement({
    fields: (t) => ({
        success: t.exposeBoolean('success', { nullable: false }),
        message: t.exposeString('message', { nullable: false }),
        data: t.field({
            type: BusinessModel,
            nullable: true,
            resolve: (parent) => parent.data as Businesses || null
        })
    })
})

export default BusinessModel;
