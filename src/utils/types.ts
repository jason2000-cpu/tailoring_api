import { Readable } from "stream";
import { Request, Response } from "express-serve-static-core";
import { Role } from "../generated/prisma";
import { Users } from "../generated/prisma/client";
import prisma from "../lib/prismaClient";
import pubsub from "../lib/pubsub";


export interface Context {
    prisma: typeof prisma;
    pubsub: typeof pubsub;
    user: { id: string, role: Role } | null,
    res: Response,
    req: Request
}

export interface ApiResponse<T = unknown> {
    success: boolean
    message: string
    role?: Role 
    data?: T
}
