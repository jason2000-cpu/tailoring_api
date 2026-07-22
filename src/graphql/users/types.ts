import { Users } from "../../generated/prisma";
import { getFileUrl } from "../../utils/getFileUrl";
import { ApiResponse } from "../../utils/types";
import { builder } from "../builder";
import { CreateBusinessInput } from "../business/types";
import { RoleEnum } from "../enums";


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
        notifications: t.relation('notifications'),
        events: t.relation('events'),
        business: t.relation('business'),

    })
})


export const CreateUserInput = builder.inputType('CreateUserInput', {
    fields: (t) => ({
        Fname: t.string({ required: true }),
        Sname: t.string({ required: true }),
        role: t.string({ required: true }), 
        email: t.string({ required: true }), 
        password: t.string({ required: true }), 
        business: t.field({ 
            type: CreateBusinessInput, 
            required: true 
        })
    })
})


export const UserResponseRef = builder.objectRef<ApiResponse>('UserResponseRef').implement({
    fields: (t) => ({
        success: t.exposeBoolean('success', { nullable: false }),
        message: t.exposeString('message', { nullable: false }),
        data: t.field({
            type: UserModel,
            nullable: true,
            resolve: (parent) => parent.data as Users || null
        })
    })
})


export default UserModel;
