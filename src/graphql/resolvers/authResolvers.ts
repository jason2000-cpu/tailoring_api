import prisma from '../../prisma/prismaClient'
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { generateJWTToken } from '../../utils/jwt';

interface Context {
    req: Request,
    res: Response
}

const authResolvers = {
    Mutation: {
        userLogin: async (_: any, { email, password }: any, { res }: Context) => {
            console.log("USER LOGIN DETAILS >>>", email, password);
            try {
                const user = await prisma.users.findUnique({ where: { email }});
    
                if (!user) throw new Error('User Not Found');
                console.log("USER FOUND::", user);
                
                const valid = await bcrypt.compare(password, user.password);
    
                if(!valid) throw new Error('Invalid password');

                const token = generateJWTToken(user.id);

                // console.log(token);
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none',
                    maxAge: 1000 * 60 * 60 * 24 * 7
                })

                return { status: 'Success', message: "You Have Successfuly Logged In", role: user.role}
            } catch (error: any){ 
                // console.log(error.message);
                return { status: 'Error', message: error.message || 'An Internal Server Error Occured'}
            }
        },

        userLogout: (_: any, __: any, { res }: Context) => {
            
            res.clearCookie("token", { httpOnly: true, secure: true });
            return { status: 'Success', message: 'Logged out Successfully'}
        }
    }
}

export default authResolvers;
