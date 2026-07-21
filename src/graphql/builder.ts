import  SchemaBuilder from '@pothos/core';
import DirectivePlugin from '@pothos/plugin-directives';
import prismaPlugin from '@pothos/plugin-prisma';
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects"
import type PrismaTypes from '../lib/pothos-prisma-types.js';
import { GraphQLDateTime, GraphQLJSON } from 'graphql-scalars';
import { GraphQLUpload } from 'graphql-upload-minimal';
import ScopeAuthPlugin from '@pothos/plugin-scope-auth';
import { GraphQLBoolean } from 'graphql';
import { getDatamodel } from '../lib/pothos-prisma-types';
import prisma from '../lib/prismaClient';
import { Role } from '../generated/prisma/index.js';
import {  Context } from '../utils/types';


export const builder = new SchemaBuilder<{
    Context: Context,
    PrismaTypes: PrismaTypes,
    Scalars: {
        DateTime: { Input: Date; Output: Date };
        Upload: { Input: File; Output: File };
        JSON: { Input: unknown; Output: unknown }
        IPv4: { Input: string, Output: string }
    };
    AuthScopes: {
        isAuthenticated: boolean,
        isAdmin: boolean,
        isUser: boolean,
    }
}>({
    plugins: [prismaPlugin, ScopeAuthPlugin, DirectivePlugin, SimpleObjectsPlugin],
    prisma: { client: prisma, dmmf: getDatamodel() },
    scopeAuth: {
        authScopes: async (context: Context) => ({
            isAuthenticated: Boolean(context.user?.id),
            isAdmin: Boolean(context.user?.role === Role.ADMIN),
            isUser: Boolean(context.user?.role === Role.USER)
        })
    }
})
 


builder.addScalarType('DateTime', GraphQLDateTime, {});
builder.addScalarType('Boolean', GraphQLBoolean, {});
builder.addScalarType('Upload', GraphQLUpload, {});
builder.addScalarType('JSON', GraphQLJSON, {})
