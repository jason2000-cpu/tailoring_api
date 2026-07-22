import bcrypt from 'bcryptjs'
import { Context } from "../../utils/types";
import { validateEmail, validatePassword } from "../../utils/validateUserInput";
import { builder } from "../builder";
import { CreateUserInput, UserResponseRef } from "./types";
import { sendUserLoginDetails } from '../../services/emailService';
import { StorageService } from '../../services/storageService';


builder.mutationFields((t) => ({
    createUser: t.field({
        type: UserResponseRef,
        args: {
            input: t.arg({ type: CreateUserInput, required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isAdmin: true
        },
        resolve: async (parent: any, { input }: any, ctx: Context) => {
            const { prisma  } = ctx;
            const { Fname, Sname, email, role, password, business } = input;

            try {
                const isValidEmail = validateEmail(email);
                const isStrongPassword = validatePassword(password);

                const findUser = await prisma.users.findUnique({ where: { email }});
                if (findUser) throw new Error('User Already Exists');

                if (!isStrongPassword || !isValidEmail) throw new Error('Credentials Do Not Match Requirements');

                const hashedPassword = await bcrypt.hash(password, 10);
                const user = await prisma.users.create({
                    data: { email, password: hashedPassword, Fname, Sname, role },
                })

                await prisma.businesses.create({
                    data: {
                        ...business,
                        userId: user.id
                    }
                })

                await sendUserLoginDetails({...user, password})

                return { success: true, message: 'User Created Successfully'}
            } catch (error: any) {
                // console.log('Error while Creating user', error);
                return { 
                    success: false, 
                    message: error.message || 'Failed to create user'
                }
            }            
        }
    }),

    updateUserProfile: t.field({
        type: UserResponseRef,
        args: {
            Fname: t.arg.string({}), 
            Sname: t.arg.string({}), 
            email: t.arg.string({}), 
            phone: t.arg.string({}), 
            password: t.arg.string({}), 
            profile_url: t.arg.string({})
        },
        authScopes: {
            isAuthenticated: true,
        },
        resolve: async (parent: any, { Fname, Sname, email, phone, password, profile_url }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {
                const updatedData: any = {};

                if(Fname) updatedData.Fname = Fname;
                if(Sname) updatedData.Sname = Sname;
                if(profile_url) updatedData.profile_url = profile_url;
                if(email) {
                    const isValidEmail = validateEmail(email);
                    if(!isValidEmail) throw new Error('Invalid Email');
                    updatedData.email = email
                }

                if(phone) updatedData.phone = phone;
                if (password) {
                    const isStrongPassword = validatePassword((password));
                    if (!isStrongPassword) throw new Error('password Does Not Meet Requirements')
                    
                    updatedData.password = await bcrypt.hash(password, 10);
                }

                await prisma.users.update({
                    where: { id: user?.id },
                    data: updatedData
                })

                return { success: true, message: 'User Profile Updated Successfully'}

            } catch(error: any) {
                return { 
                    success: false, 
                    message: error.message || 'An Internal Server Error Occured' 
                }
            }            
        }
    }),

    updateUserProfilePic: t.field({
        type: UserResponseRef,
        args: {
            image: t.arg({ type: 'Upload', required: true })
        },
        authScopes: { isAuthenticated: true },
        resolve: async (parent: any, { image }: any, ctx: Context) => {
            const { prisma, user } = ctx;
            try {

                const key = await StorageService.uploadFile(image, user?.id!);

                await prisma.users.update({
                    where: { id: user?.id },
                    data: { profile_url: key }
                })

                return { 
                    success: true, 
                    message: "Business Profile Picture Updated Successfully" 
                }
            } catch (error: any) {
                return { 
                    success: false, 
                    message: error.message || 'An Unknown Error Occured'
                }
            }            
        }
    }),

    deleteUser: t.field({
        type: UserResponseRef,
        args: {
            userIds: t.arg.stringList({ required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isAdmin: true
        },
        resolve: async (parent: any, { userIds }: any, ctx: Context) => {
            const { prisma } = ctx;
            try {
                await prisma.users.deleteMany({
                    where: {
                        id: {
                            in: userIds,
                        }
                    }
                });

                const usersLength = userIds.length;
                return { 
                    success: true, 
                    message: `${usersLength} ${ usersLength == 1 ? 'User' : 'Users'} Deleted Successfully`
                }

            } catch(error: any){
                console.log(error);
                return { 
                    success: false, 
                    message: error.message || "An Internal Server Error Occured"
                }
            }            
        }
    }),

    toggleActivation: t.field({
        type: UserResponseRef,
        args: {
            userId: t.arg.string({ required: true })
        },
        authScopes: {
            isAuthenticated: true,
            isAdmin: true
        },
        resolve: async (parent: any, { userId }: any, ctx: Context) => {
            const { prisma } = ctx;
            try {

                const account = await prisma.users.findUnique({ 
                    where: { id: userId }
                });
                if (!account) throw new Error("Account Not found");

                if (account.accountStatus) {
                    await prisma.users.update({
                        where: { id: userId },
                        data: { accountStatus: false }
                    })

                    return { success: true, message: 'Account Deactivated Successfully'}
                } else {
                    await prisma.users.update({
                        where: { id: userId },
                        data: { accountStatus: true }
                    });

                    return { success: true, message: 'Account Activated Successfully'}
                }

            } catch(error: any) {
                console.log(error.message);
                return {
                     success: false, 
                     message: error.message || 'An Internal Server Error Occured'
                    }
            }
        }
    })
}))
