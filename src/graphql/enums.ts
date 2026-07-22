import { CompletionStatus } from "../generated/prisma";
import { Role } from "../generated/prisma";
import { builder } from "./builder";


export const RoleEnum = builder.enumType(Role, {
    name: 'RoleEnum'
} )

export const GroupByEnum = builder.enumType('GroupBy', {
    values: {
        DAILY: { value: 'daily' },
        MONTHLY: { value: 'monthly' },
        YEARLY: { value: 'yearly' }
    }
})

export const CompletionStatusEnum = builder.enumType(CompletionStatus, {
    name: 'CompletionStatusEnum'
})
