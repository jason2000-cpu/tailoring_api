import bcrypt from 'bcryptjs'
import prisma from '../../lib/prismaClient'
import { validateEmail, validatePassword } from '../../utils/validateUserInput';
import { generateJWTToken, verifyToken } from '../../utils/jwt';
import { sendPassResetInstructionsMail, sendUserLoginDetails } from '../../services/emailService';
import { StorageService } from '../../services/storageService';


const userResolvers = {
    Query: {
        users: async (_: any, __: any, { user_id }: { user_id: number }) => {
            if(!user_id) throw new Error("Not Authorized");

            try {
                const user: any = await prisma.users.findUnique({ where: { id: user_id}})

                if (user.role !== 'ADMIN') throw new Error('Not Authorized')

                const allUsers = await prisma.users.findMany({ include: { business: true}});
                return { status: 'Success', message:"Successfully fetched all users",  users: allUsers }
                
            } catch(error: any){
                // console.log(error.message);
                return { status: 'Error', message: error.message || 'Error While Getting All Users'}
            }
        },
        user: async (_: any, __: any, { user_id }: { user_id: number}) => {
            try {
                if (!user_id) throw new Error("Not Authrorized")

                    const user = await prisma.users.findUnique({ 
                        where: { id: user_id },
                        include: { business: {include: { income: true, expenses: true, clients: true, financialRecords: true}} }
                    });
        
                    if (!user) throw new Error('User Not Found');
                    // console.log("USER FOUND:::", user)
        
                    return { status: 'Success', message: "Successfully fetched user",  user}
            } catch (error: any) {
                return { status: "Error", message: error.message}
            }
        }
    },
    Mutation: {
        createUser: async (_: any, { input }: any, {}) => {
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

                return { status: 'Success', message: 'User Created Successfully'}
            } catch (error: any) {
                // console.log('Error while Creating user', error);
                return { status: 'Error', message: error.message || 'Failed to create user'}
            }
        },

        passwordResetRequest: async (_: any, { email }: any ) => {
            try {
                const user = await prisma.users.findUnique({ where: { email }});

                if (!user) throw new Error(`User with the email ${email} does not exist`);

                const reset_password_token = generateJWTToken(user)

                sendPassResetInstructionsMail(email, reset_password_token);

                return { status: 'Success', message: 'Password reset instructions have been sent to your email'};

            } catch (error: any) {
                // console.log(error.message);
                return { status: 'Error', message: error.message || 'An Internal Server Error Occured'}
            }
        },

        passwordReset: async(_: any, { token, newPassword }: any) => {
            try {
                const payload = verifyToken(token);

                const hashedPassword = await bcrypt.hash(newPassword, 10);

                await prisma.users.update({
                    where: { id: payload.user.id },
                    data: { password: hashedPassword }
                })

                return { status: 'Success', message: 'Password Reset Successful'}

            } catch (error: any) {
                console.log(error.message);
                return { status: 'Success', message: error.message || 'An Internal Server Error Occured'}
            }
        },

        updateUserProfile: async (_: any, {  Fname, Sname, email, phone, password, profile_url }: any, { user_id } : { user_id: number }) => {
            // console.log("PROFILE URL:::", profile_url, Fname, Sname, email, phone, password)
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user) throw new Error('User Not Found')
                
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
                        where: { id: user_id },
                        data: updatedData
                    })

                    return { status: 'Success', message: 'User Profile Updated Successfully'}

            } catch(error: any) {
                return { status: 'Error', message: error.message || 'An Internal Server Error Occured' }
            }
        },

        updateUser: async (_: any, { input }: any, { user_id }: { user_id: number }) => {
            const { userId, Fname, Sname, email, phone, role, business } = input;
            try {
                const user: any = await prisma.users.findUnique({ where: { id: user_id}})
                if (user.role !== 'ADMIN') return { status: 'Error', message: 'Not Authorized'}

                const updatedUser: any ={}
                if(Fname) updatedUser.Fname = Fname;
                if(Sname) updatedUser.Sname = Sname;
                if(role) updatedUser.role = role;
                if(email) {
                    const isValidEmail = validateEmail(email);
                    if(!isValidEmail) throw new Error('Invalid Email');
                    updatedUser.email = email
                }

                if(phone) updatedUser.phone = phone;

                await prisma.users.update({
                    where: { id: userId },
                    data: updatedUser
                })

                if (business) {
                    const { businessId, name, phone, email, address } = business;

                    const businessFound = await prisma.businesses.findUnique({ where: { id: businessId }})
                    if (!businessFound) return { status: 'Error', message: `Business With Id ${ businessId } Not Found`}

                    const updatedBusiness: any = {};
                    if(name) updatedBusiness.name = name;
                    if(phone) updatedBusiness.phone = phone;
                    if(email) updatedBusiness.email = email;
                    if(address) updatedBusiness.address = address;
    
                    await prisma.businesses.update({
                        where: { id: businessId},
                        data: updatedBusiness
                    })
                }

                return { status: 'Success', message: 'User Updated Successfully'}

            } catch(error: any) {
                console.log(error);
                return { status: 'Success', message: 'An Internal Server Error Occured'}
            }
        },


        updateUserProfilePic : async (_: any, { image }: any, { user_id }: { user_id: number }) => {
            try {
                const user = await prisma.users.findUnique({ where: { id: user_id }});
                if(!user || user.role !== 'USER') return { status: 'Error', message: 'Not Authorized'}

                const key = await StorageService.uploadFile(image, `${user_id}`);

                await prisma.users.update({
                    where: { id: user_id },
                    data: { profile_url: key }
                })

                return { status: "Success", message: "Business Profile Picture Updated Successfully" }
            } catch (error: any) {
                return { status: "Error", message: error.message || 'An Unknown Error Occured'}
            }
        },

        deleteUser: async (_: any, { userIds }: { userIds: string[] }, { user_id }: { user_id: number }) => {
            try {
                const user: any = await prisma.users.findUnique({ where: { id: user_id}})
                if (user.role !== 'ADMIN') throw new Error('Not Authorized')

                const integerUserIds = userIds.map((id) => parseInt(id, 10)).filter((id) => !isNaN(id))

                await prisma.users.deleteMany({
                    where: {
                        id: {
                            in: integerUserIds,
                        }
                    }
                });

                const usersLength = userIds.length;
                return { 
                    status: 'Success', 
                    message: `${usersLength} ${ usersLength == 1 ? 'User' : 'Users'} Deleted Successfully`
                }
            } catch(error: any){
                console.log(error);
                return { status: "Error", message: "An Internal Server Error Occured"}
            }
        },

        toggleActivation: async (_: any, { userId }: any, { user_id }: { user_id: number }) => {
            try {
                const user: any = await prisma.users.findUnique({ where: { id: user_id}})
                if (user.role !== 'ADMIN') throw new Error('Not Authorized')

                const account = await prisma.users.findUnique({ where: { id: userId }});
                if (!account) throw new Error("Account Not found");

                if (account.accountStatus) {
                    await prisma.users.update({
                        where: { id: userId },
                        data: { accountStatus: false }
                    })

                    return { status: 'Success', message: 'Account Deactivated Successfully'}
                } else {
                    await prisma.users.update({
                        where: { id: userId },
                        data: { accountStatus: true }
                    });

                    return { status: 'Success', message: 'Account Activated Successfully'}
                }

            } catch(error: any) {
                console.log(error.message);
                return { status: 'Error', message: error.message || 'An Internal Server Error Occured'}
            }
        }
    },

}


export default userResolvers;
