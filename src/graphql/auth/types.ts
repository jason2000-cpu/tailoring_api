import { builder } from "../builder";
import { ApiResponse } from "../../utils/types";
import { Users } from "../../generated/prisma/client";
import { RoleEnum } from "../enums";
import UserModel from "../users/types";


export const SignInInput = builder.inputType('SignupInput', {
    fields: (t) => ({
        email: t.string({ required: true }),
        password: t.string({ required: true }),
    })
})

export const AuthResponseRef = builder.objectRef<ApiResponse>('AuthResponseRef').implement({
    fields: (t) => ({
        success: t.exposeBoolean('success', { nullable: false }),
        message: t.exposeString('message', { nullable: false }),
        role: t.expose('role', { type: RoleEnum }),
        data: t.field({
            type: UserModel,
            nullable: true,
            resolve: (parent) => parent.data as Users || null
        })
    })
})
