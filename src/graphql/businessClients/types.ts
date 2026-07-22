import { Clients } from "../../generated/prisma";
import { ApiResponse } from "../../utils/types";
import { builder } from "../builder";
import { addMeasurementsInput } from "../measurements/types";


const BusinessclientModel = builder.prismaObject('Clients', {
    fields: (t) => ({
        id: t.exposeID('id'),
        Fname: t.exposeString('Fname'),
        Sname: t.exposeString('Sname'),
        email: t.exposeString('email'),
        phone: t.exposeString('phone'),
        activeOrder: t.exposeBoolean('activeOrder'),
        measurements: t.relation('measurements'),
        orders: t.relation('orders'),
    })
})

export const addClientInput = builder.inputType('addClientInput', {
    fields: (t) => ({
        Fname: t.string({ required: true}),
        Sname: t.string({ required: true}), 
        email: t.string({ required: true}), 
        phone: t.string({ required: true}), 
        measurements: t.field({
            type: addMeasurementsInput,
        }),
    })
})

export const BusinessClientsResponseRef = builder.objectRef<ApiResponse>('BusinessClientsResponseRef').implement({
    fields: (t) => ({
        success: t.exposeBoolean('success', { nullable: false }),
        message: t.exposeString('message', { nullable: false }),
        data: t.field({
            type: BusinessclientModel,
            nullable: true,
            resolve: (parent) => parent.data as Clients || null
        })
    })
})

export default BusinessclientModel
