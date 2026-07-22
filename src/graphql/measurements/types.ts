import { Measurements } from "../../generated/prisma";
import { ApiResponse } from "../../utils/types";
import { builder } from "../builder";


const MeasurementsModel = builder.prismaObject('Measurements', {
    fields: (t) => ({
        id: t.exposeID('id'),
        clientId: t.exposeID('clientId'),
        height: t.exposeString('height'),
        shoulders: t.exposeString('shoulders'),
        hand: t.exposeString('hand'),
        chest: t.exposeString('chest'),
        waist: t.exposeString('waist'),
        hips: t.exposeString('hips')
    })
})

export const addMeasurementsInput = builder.inputType('addMeasurementsInput', {
    fields: (t) => ({
        clientId: t.string({ required: true }), 
        height: t.float({ required: true }), 
        shoulders: t.string(),
        hand: t.string(),
        hips: t.string(),
        chest: t.string(),
        waist: t.string(),
    })
})

export const MeasurementsResponseRef = builder.objectRef<ApiResponse>('MeasurementsResponseRef').implement({
    fields: (t) => ({
        success: t.exposeBoolean('success', { nullable: false }),
        message: t.exposeString('message', { nullable: false }),
        data: t.field({
            type: MeasurementsModel,
            nullable: true,
            resolve: (parent) => parent.data as Measurements || null
        })
    })
})


export default MeasurementsModel;
