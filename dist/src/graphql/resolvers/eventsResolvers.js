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
const eventResolvers = {
    Query: {
        getAllUserEvents: (_1, __1, _a) => __awaiter(void 0, [_1, __1, _a], void 0, function* (_, __, { user_id }) {
            try {
                if (!user_id)
                    return { status: 'Error', message: 'Not Authorized' };
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user)
                    return { status: 'Error', message: 'User Not Found' };
                const events = yield prismaClient_1.default.events.findMany({ where: { userId: user_id } });
                return { status: 'Success', message: 'Events fetched successfully', events };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
    },
    Mutation: {
        addEvent: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { title, start, end, description }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user)
                    return { status: 'Error', message: 'User Not Found' };
                yield prismaClient_1.default.events.create({
                    data: { userId: user.id, title, start, end, description }
                });
                return { status: 'Success', message: 'Event Added Successfully' };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        updateEvent: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { eventId, title, start, end, description }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user)
                    return { status: 'Error', message: 'User Not Found' };
                const eventToUpdate = yield prismaClient_1.default.events.findUnique({ where: { id: eventId } });
                if (!eventToUpdate)
                    return { status: 'Error', message: `Event with Id ${eventId} Not Found` };
                const eventUpdate = {};
                if (title)
                    eventUpdate.title = title;
                if (start)
                    eventUpdate.start = start;
                if (end)
                    eventUpdate.end = end;
                if (description)
                    eventUpdate.description = description;
                yield prismaClient_1.default.events.update({
                    where: { id: eventId },
                    data: { userId: user.id, title, start, end, description }
                });
                return { status: 'Success', message: 'Event Updated Successfully' };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        deleteEvent: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { eventId }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user)
                    return { status: 'Error', message: 'User Not Found' };
                const eventToDelete = yield prismaClient_1.default.events.findUnique({ where: { id: eventId } });
                if (!eventToDelete)
                    return { status: 'Error', message: `Event with Id ${eventId} Not Found` };
                yield prismaClient_1.default.events.delete({ where: { id: eventId } });
                return { status: 'Success', message: 'Event Deleted Successfully' };
            }
            catch (error) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        })
    }
};
exports.default = eventResolvers;
