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
const clientResolvers = {
    Query: {
        getBusinessClients: (_1, __1, _a) => __awaiter(void 0, [_1, __1, _a], void 0, function* (_, __, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    throw new Error(`Business with User Id : ${user_id} Not Found`);
                const businessClients = yield prismaClient_1.default.clients.findMany({
                    where: { businessId: business.id },
                    include: { measurements: true }
                });
                return { status: 'Success', message: 'Clients fetched successfully', businessClients };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        })
    },
    Mutation: {
        addClient: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { input }, { user_id }) {
            const { Fname, Sname, email, phone, measurements } = input;
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    return { status: 'Error', message: `Business with User Id : ${user_id} Not Found` };
                const findClient = yield prismaClient_1.default.clients.findUnique({ where: { phone } });
                if (findClient)
                    return { status: 'Error', message: `A Customer with phone number ${phone} already exists` };
                const client = yield prismaClient_1.default.clients.create({
                    data: { Fname, Sname, email, phone, businessId: business.id }
                });
                if (measurements) {
                    yield prismaClient_1.default.measurements.create({
                        data: Object.assign({ clientId: client.id }, measurements)
                    });
                }
                return { status: 'Success', message: 'Customer Added Successfully' };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        updateClient: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { input }, { user_id }) {
            const { id, Fname, Sname, email, phone, measurements } = input;
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const updatedClient = {};
                if (Fname)
                    updatedClient.Fname = Fname;
                if (Sname)
                    updatedClient.Sname = Sname;
                if (email)
                    updatedClient.email = email;
                if (phone)
                    updatedClient.phone = phone;
                yield prismaClient_1.default.clients.update({
                    where: { id: Number(id) },
                    data: Object.assign({}, updatedClient)
                });
                if (measurements) {
                    const { height, shoulders, hand, chest, waist, hips } = measurements;
                    console.log(height, shoulders, hand, chest, waist, hips);
                    const updatedMeasurements = {};
                    if (height)
                        updatedMeasurements.height = height;
                    if (shoulders)
                        updatedMeasurements.shoulders = shoulders;
                    if (hand)
                        updatedMeasurements.hand = hand;
                    if (chest)
                        updatedMeasurements.chest = chest;
                    if (waist)
                        updatedMeasurements.waist = waist;
                    if (hips)
                        updatedMeasurements.hips = hips;
                    const clientMeasurements = yield prismaClient_1.default.measurements.findUnique({ where: { clientId: Number(id) } });
                    if (!clientMeasurements) {
                        yield prismaClient_1.default.measurements.create({
                            data: Object.assign({ clientId: Number(id) }, measurements)
                        });
                    }
                    else {
                        yield prismaClient_1.default.measurements.update({
                            where: { clientId: Number(id) },
                            data: Object.assign({}, updatedMeasurements)
                        });
                    }
                }
                return { status: 'Success', message: 'Customer Updated Successfully' };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        deleteClient: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { clientIds }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    throw new Error(`Business with User Id : ${user_id} Not Found`);
                const integerClientIds = clientIds.map((id) => parseInt(id, 10)).filter((id) => !isNaN(id));
                yield prismaClient_1.default.clients.deleteMany({
                    where: {
                        id: {
                            in: integerClientIds,
                        }
                    }
                });
                const clientsLength = clientIds.length;
                return {
                    status: 'Success',
                    message: `${clientsLength} ${clientsLength == 1 ? 'Client' : 'Clients'} Deleted Successfully`
                };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        })
    }
};
exports.default = clientResolvers;
