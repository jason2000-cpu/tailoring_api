import { builder } from "../builder";
import { ApiResponse } from "../../utils/types";
import { Users } from "../../generated/prisma/client";
import { RoleEnum } from "../enums";
import { getFileUrl } from "../../utils/getFileUrl";


const UserModel = builder.prismaObject("Users", {
    fields: (t: any) => ({
        id: t.exposeID('id'),
        Fname: t.exposeString('Fname'),
        Sname: t.exposeString('Sname'),
        email: t.exposeString('email'),
        phone: t.exposeString('phone', { nullable: true }),
        role: t.expose('role', { type: RoleEnum }),
        accountStatus: t.exposeBoolean('accountStatus'),
        profile_url: t.field({
            type: 'String',
            nullable: true,
            resolve: async (parent: Users) => {
                const key = parent.profile_url;
                if (!key) return null;

                try {
                    return await getFileUrl(key);
                } catch (error) {
                    return null
                }
            }
        }),
        // notifications: t.relation('notifications'),
        // events: t.relation('events),
        // business: t.relation(),

    })
})


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

export default UserModel;
