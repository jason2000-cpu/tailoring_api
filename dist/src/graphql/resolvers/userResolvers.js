"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prismaClient_1 = __importDefault(require("../../prisma/prismaClient"));
const validateUserInput_1 = require("../../utils/validateUserInput");
const jwt_1 = require("../../utils/jwt");
const emailService_1 = require("../../services/emailService");
const userResolvers = {
    Query: {
        users: (_1, __1, _a) => __awaiter(void 0, [_1, __1, _a], void 0, function* (_, __, { user_id }) {
            if (!user_id)
                throw new Error("Not Authorized");
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (user.role !== 'ADMIN')
                    throw new Error('Not Authorized');
                const allUsers = yield prismaClient_1.default.users.findMany({ include: { business: true } });
                return { status: 'Success', message: "Successfully fetched all users", users: allUsers };
            }
            catch (error) {
                // console.log(error.message);
                return { status: 'Error', message: error.message || 'Error While Getting All Users' };
            }
        }),
        user: (_1, __1, _a) => __awaiter(void 0, [_1, __1, _a], void 0, function* (_, __, { user_id }) {
            try {
                if (!user_id)
                    throw new Error("Not Authrorized");
                const user = yield prismaClient_1.default.users.findUnique({
                    where: { id: user_id },
                    include: { business: { include: { income: true, expenses: true, clients: true, financialRecords: true } } }
                });
                if (!user)
                    throw new Error('User Not Found');
                // console.log("USER FOUND:::", user)
                return { status: 'Success', message: "Successfully fetched user", user };
            }
            catch (error) {
                return { status: "Error", message: error.message };
            }
        })
    },
    Mutation: {
        createUser: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { input }, {}) {
            const { Fname, Sname, email, role, password, business } = input;
            try {
                const isValidEmail = (0, validateUserInput_1.validateEmail)(email);
                const isStrongPassword = (0, validateUserInput_1.validatePassword)(password);
                const findUser = yield prismaClient_1.default.users.findUnique({ where: { email } });
                if (findUser)
                    throw new Error('User Already Exists');
                if (!isStrongPassword || !isValidEmail)
                    throw new Error('Credentials Do Not Match Requirements');
                const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
                const user = yield prismaClient_1.default.users.create({
                    data: { email, password: hashedPassword, Fname, Sname, role },
                });
                yield prismaClient_1.default.businesses.create({
                    data: Object.assign(Object.assign({}, business), { userId: user.id })
                });
                yield (0, emailService_1.sendUserLoginDetails)(Object.assign(Object.assign({}, user), { password }));
                return { status: 'Success', message: 'User Created Successfully' };
            }
            catch (error) {
                // console.log('Error while Creating user', error);
                return { status: 'Error', message: error.message || 'Failed to create user' };
            }
        }),
        passwordResetRequest: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { email }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { email } });
                if (!user)
                    throw new Error(`User with the email ${email} does not exist`);
                const reset_password_token = (0, jwt_1.generateJWTToken)(user);
                (0, emailService_1.sendPassResetInstructionsMail)(email, reset_password_token);
                return { status: 'Success', message: 'Password reset instructions have been sent to your email' };
            }
            catch (error) {
                // console.log(error.message);
                return { status: 'Error', message: error.message || 'An Internal Server Error Occured' };
            }
        }),
        passwordReset: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { token, newPassword }) {
            try {
                const payload = (0, jwt_1.verifyToken)(token);
                const hashedPassword = yield bcryptjs_1.default.hash(newPassword, 10);
                yield prismaClient_1.default.users.update({
                    where: { id: payload.user.id },
                    data: { password: hashedPassword }
                });
                return { status: 'Success', message: 'Password Reset Successful' };
            }
            catch (error) {
                console.log(error.message);
                return { status: 'Success', message: error.message || 'An Internal Server Error Occured' };
            }
        }),
        updateUserProfile: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { Fname, Sname, email, phone, password, profile_url }, { user_id }) {
            // console.log("PROFILE URL:::", profile_url, Fname, Sname, email, phone, password)
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user)
                    throw new Error('User Not Found');
                const updatedData = {};
                if (Fname)
                    updatedData.Fname = Fname;
                if (Sname)
                    updatedData.Sname = Sname;
                if (profile_url)
                    updatedData.profile_url = profile_url;
                if (email) {
                    const isValidEmail = (0, validateUserInput_1.validateEmail)(email);
                    if (!isValidEmail)
                        throw new Error('Invalid Email');
                    updatedData.email = email;
                }
                if (phone)
                    updatedData.phone = phone;
                if (password) {
                    const isStrongPassword = (0, validateUserInput_1.validatePassword)((password));
                    if (!isStrongPassword)
                        throw new Error('password Does Not Meet Requirements');
                    updatedData.password = yield bcryptjs_1.default.hash(password, 10);
                }
                yield prismaClient_1.default.users.update({
                    where: { id: user_id },
                    data: updatedData
                });
                return { status: 'Success', message: 'User Profile Updated Successfully' };
            }
            catch (error) {
                return { status: 'Error', message: error.message || 'An Internal Server Error Occured' };
            }
        }),
        updateUser: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { input }, { user_id }) {
            const { userId, Fname, Sname, email, phone, role, business } = input;
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (user.role !== 'ADMIN')
                    return { status: 'Error', message: 'Not Authorized' };
                const updatedUser = {};
                if (Fname)
                    updatedUser.Fname = Fname;
                if (Sname)
                    updatedUser.Sname = Sname;
                if (role)
                    updatedUser.role = role;
                if (email) {
                    const isValidEmail = (0, validateUserInput_1.validateEmail)(email);
                    if (!isValidEmail)
                        throw new Error('Invalid Email');
                    updatedUser.email = email;
                }
                if (phone)
                    updatedUser.phone = phone;
                yield prismaClient_1.default.users.update({
                    where: { id: userId },
                    data: updatedUser
                });
                if (business) {
                    const { businessId, name, phone, email, address } = business;
                    const businessFound = yield prismaClient_1.default.businesses.findUnique({ where: { id: businessId } });
                    if (!businessFound)
                        return { status: 'Error', message: `Business With Id ${businessId} Not Found` };
                    const updatedBusiness = {};
                    if (name)
                        updatedBusiness.name = name;
                    if (phone)
                        updatedBusiness.phone = phone;
                    if (email)
                        updatedBusiness.email = email;
                    if (address)
                        updatedBusiness.address = address;
                    yield prismaClient_1.default.businesses.update({
                        where: { id: businessId },
                        data: updatedBusiness
                    });
                }
                return { status: 'Success', message: 'User Updated Successfully' };
            }
            catch (error) {
                console.log(error);
                return { status: 'Success', message: 'An Internal Server Error Occured' };
            }
        }),
        deleteUser: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { userIds }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (user.role !== 'ADMIN')
                    throw new Error('Not Authorized');
                const integerUserIds = userIds.map((id) => parseInt(id, 10)).filter((id) => !isNaN(id));
                yield prismaClient_1.default.users.deleteMany({
                    where: {
                        id: {
                            in: integerUserIds,
                        }
                    }
                });
                const usersLength = userIds.length;
                return {
                    status: 'Success',
                    message: `${usersLength} ${usersLength == 1 ? 'User' : 'Users'} Deleted Successfully`
                };
            }
            catch (error) {
                console.log(error);
                return { status: "Error", message: "An Internal Server Error Occured" };
            }
        }),
        toggleActivation: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { userId }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (user.role !== 'ADMIN')
                    throw new Error('Not Authorized');
                const account = yield prismaClient_1.default.users.findUnique({ where: { id: userId } });
                if (!account)
                    throw new Error("Account Not found");
                if (account.accountStatus) {
                    yield prismaClient_1.default.users.update({
                        where: { id: userId },
                        data: { accountStatus: false }
                    });
                    return { status: 'Success', message: 'Account Deactivated Successfully' };
                }
                else {
                    yield prismaClient_1.default.users.update({
                        where: { id: userId },
                        data: { accountStatus: true }
                    });
                    return { status: 'Success', message: 'Account Activated Successfully' };
                }
            }
            catch (error) {
                console.log(error.message);
                return { status: 'Error', message: error.message || 'An Internal Server Error Occured' };
            }
        })
    },
};
exports.default = userResolvers;
