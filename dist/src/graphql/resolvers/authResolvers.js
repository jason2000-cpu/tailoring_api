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
const prismaClient_1 = __importDefault(require("../../prisma/prismaClient"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../../utils/jwt");
const authResolvers = {
    Mutation: {
        userLogin: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { email, password }, { res }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { email } });
                if (!user)
                    throw new Error('User Not Found');
                // console.log("USER FOUND::", user);
                const valid = yield bcryptjs_1.default.compare(password, user.password);
                if (!valid)
                    throw new Error('Invalid password');
                const token = (0, jwt_1.generateJWTToken)(user.id);
                // console.log(token);
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none',
                    maxAge: 1000 * 60 * 60 * 24 * 7
                });
                return { status: 'Success', message: "You Have Successfuly Logged In", role: user.role };
            }
            catch (error) {
                // console.log(error.message);
                return { status: 'Error', message: error.message || 'An Internal Server Error Occured' };
            }
        }),
        userLogout: (_, __, { res }) => {
            res.clearCookie("token", { httpOnly: true, secure: true });
            return { status: 'Success', message: 'Logged out Successfully' };
        }
    }
};
exports.default = authResolvers;
