import { Context } from "../../utils/types";
import { builder } from "../builder";
import { BusinessResponseRef } from "./types";


builder.queryFields((t) => ({
    getBusinesses: t.field({
        type: BusinessResponseRef,
        args: {},
        authScopes: { isAdmin: true },
        resolve: async (parent: any,  {}: any, ctx: Context) => {
            const { prisma } = ctx;
            try {
                const businesses = await prisma.businesses.findMany();
                return { success: true , message: 'Fetch Successful', data: businesses }

            } catch(error: any) {
                console.log(error);
                return { success: false, message: 'An Internal Server Error Occured'}
            }
        }
    })
}))
