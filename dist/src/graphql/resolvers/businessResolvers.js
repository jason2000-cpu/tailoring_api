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
const businessResolvers = {
    Query: {
        getBusinesses: (_1, __1, _a) => __awaiter(void 0, [_1, __1, _a], void 0, function* (_, __, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'ADMIN')
                    return { status: 'Error', message: 'Not Authorized' };
                const businesses = yield prismaClient_1.default.businesses.findMany();
                return { status: 'Success', message: 'Fetch Successful', businesses };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        })
    },
    Mutation: {
        updateBusinessDetails: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { businessId, name, logo, phone, email, currency, address }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { id: businessId } });
                if (!business)
                    return { status: 'Error', message: `Business with Id ${businessId} Not Found` };
                const updatedBusinessInfo = {};
                if (name)
                    updatedBusinessInfo.name = name;
                if (logo)
                    updatedBusinessInfo.logo = logo;
                if (phone)
                    updatedBusinessInfo.phone = phone;
                if (email)
                    updatedBusinessInfo.email = email;
                if (currency)
                    updatedBusinessInfo.currency = currency;
                if (address)
                    updatedBusinessInfo.address = address;
                yield prismaClient_1.default.businesses.update({
                    where: { id: businessId },
                    data: updatedBusinessInfo
                });
                return { status: 'Success', message: 'Business Details Updated Successfully' };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        deleteBusiness: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { businessId }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { id: businessId } });
                if (!business)
                    return { status: 'Error', message: `Business with Id ${businessId} Not Found` };
                yield prismaClient_1.default.businesses.delete({ where: { id: businessId } });
                return { status: 'Success', message: 'Business Details Deleted Successfully' };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        })
    }
};
exports.default = businessResolvers;
