import bcrypt from 'bcryptjs'
import { generateAccessToken } from "../../utils/authUtils";
import { Context } from "../../utils/types";
import { builder } from "../builder";
import { AuthResponseRef, SignInInput } from "./types";



builder.mutationFields((t) => ({
    userLogin: t.field({
        type: AuthResponseRef,
        args: {
            input: t.arg({ type: SignInInput , required: true })
        },
        resolve: async (parent: any, { input }: any, ctx: Context) => {
            const { prisma, res } = ctx;
            try {
                const { email, password } = input;

                const user = await prisma.users.findUnique({ where: { email }});
    
                if (!user) throw new Error('User Not Found');
                console.log("USER FOUND::", user);
                
                const valid = await bcrypt.compare(password, user.password);
    
                if(!valid) throw new Error('Invalid password');

                const token = generateAccessToken(user.id);

                // console.log(token);
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none',
                    maxAge: 1000 * 60 * 60 * 24 * 7
                })

                return { success: true, message: "You Have Successfuly Logged In", role: user.role}
            } catch (error: any){ 
                // console.log(error.message);
                return { success: false, message: error.message || 'An Internal Server Error Occured'}
            }
        }
    }),

    userLogout: t.field({
        type: AuthResponseRef,
        args: {},
        authScopes: { isAuthenticated: true },
        resolve: async (parent: any, {}: any, ctx: Context) => {
            const { res } = ctx;
            res.clearCookie("token", { httpOnly: true, secure: true });
            return { success: true , message: 'Logged out Successfully'}
        }
    })
}))
