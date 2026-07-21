import { Role } from "../generated/prisma";
import { builder } from "./builder";


export const RoleEnum = builder.enumType(Role, {
    name: 'RoleEnum'
} )
