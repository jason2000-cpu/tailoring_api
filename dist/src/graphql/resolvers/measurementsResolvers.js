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
const measurementsResolvers = {
    Muation: {
        addMeasurements: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { input }, { user_id }) {
            const { clientId, height, shoulders, hand, chest, waist, } = input;
            try {
                const client = yield prismaClient_1.default.clients.findUnique({ where: { id: clientId } });
                if (!client)
                    return { status: 'Error', message: `Client With Id ${clientId} Not Found` };
                yield prismaClient_1.default.measurements.create({
                    data: Object.assign({}, input)
                });
                return { status: 'Success', message: 'Measurements Added Successfully' };
            }
            catch (error) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        })
    }
};
exports.default = measurementsResolvers;
