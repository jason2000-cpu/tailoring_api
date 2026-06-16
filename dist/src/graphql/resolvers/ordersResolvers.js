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
const ordersResolvers = {
    Query: {
        getBusinessOrders: (_1, __1, _a) => __awaiter(void 0, [_1, __1, _a], void 0, function* (_, __, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    return { status: 'Error', message: `Business with User Id : ${user_id} Not Found` };
                const businessOrders = yield prismaClient_1.default.orders.findMany({
                    where: { businessId: business.id },
                    include: { client: true, payments: true }
                });
                return { status: 'Success', message: 'Orders Fetched Successfully', businessOrders };
            }
            catch (error) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        getOrder: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { clientId }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    return { status: 'Error', message: `Business with User Id : ${user_id} Not Found` };
                const orders = yield prismaClient_1.default.orders.findMany({ where: { clientId }, include: { payments: true } });
                if (!orders)
                    return { status: 'Error', message: `No Order Found For Client with Id ${clientId}` };
                return { status: 'Success', message: 'Order Fetched Successfully', orders };
            }
            catch (error) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        })
    },
    Mutation: {
        addOrder: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { input }, { user_id }) {
            const { customerId, item, description, completionStatus, collectionDate, payments } = input;
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    return { status: 'Error', message: `Business with User Id : ${user_id} Not Found` };
                const customer = yield prismaClient_1.default.clients.findUnique({ where: { id: customerId } });
                if (!customer)
                    return { status: 'Error', message: `Customer with Id : ${customerId} Not Found` };
                const client = yield prismaClient_1.default.clients.findUnique({ where: { id: customerId } });
                if (!client)
                    return { status: 'Error', message: `Customer With Id ${customerId} Not Found` };
                // update activeOrder status for client
                const activeOrderUpdate = yield prismaClient_1.default.clients.update({
                    where: { id: customerId },
                    data: { activeOrder: true }
                });
                console.log("ACTIVE ORDER STATUS UPDATED::", activeOrderUpdate);
                // create order
                const order = yield prismaClient_1.default.orders.create({
                    data: { businessId: business.id, item, clientId: customerId, description, completionStatus, collectionDate }
                });
                // create order collection event
                yield prismaClient_1.default.events.create({
                    data: {
                        userId: user_id,
                        title: `Order Collection - ${customer.Fname} ${customer.Sname} will be collecting their ${item}`,
                        description: `Order collectiion of ${item} by ${customer.Fname} ${customer.Sname} `,
                        start: collectionDate,
                        end: collectionDate
                    }
                });
                // console.log("ADDING PAYMENTS:::", payments, payments.totalAmount, payments.paidAmount)
                if (payments) {
                    const { totalAmount, paidAmount } = payments;
                    if (totalAmount === paidAmount) {
                        yield prismaClient_1.default.income.create({
                            data: {
                                businessId: business.id,
                                amount: totalAmount,
                                description: `Sold a ${item} to ${customer.Fname} ${customer.Sname} on ${new Date().toDateString()}`,
                                category: "Customer Orders"
                            }
                        });
                    }
                    yield prismaClient_1.default.payments.create({
                        data: Object.assign(Object.assign({}, payments), { orderId: order.id })
                    });
                }
                return { status: 'Success', message: 'Customer Oder Created Successfully' };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        updateOrder: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { input }, { user_id }) {
            const { orderId, description, completionStatus, collectionDate, payments } = input;
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const order = yield prismaClient_1.default.orders.findUnique({ where: { id: orderId }, include: { client: true } });
                if (!order)
                    return { status: 'Error', message: `Order with Id ${orderId} Not Found` };
                const updatedOrder = {};
                if (description)
                    updatedOrder.description = description;
                if (completionStatus)
                    updatedOrder.completionStatus = completionStatus;
                if (collectionDate)
                    updatedOrder.collectionDate = collectionDate;
                yield prismaClient_1.default.orders.update({
                    where: { id: orderId },
                    data: updatedOrder
                });
                if (payments) {
                    const orderPayment = yield prismaClient_1.default.payments.findUnique({ where: { orderId } });
                    const { totalAmount, paidAmount } = payments;
                    if (totalAmount === paidAmount) {
                        yield prismaClient_1.default.income.create({
                            data: {
                                businessId: order.businessId,
                                amount: totalAmount,
                                description: `Sold a ${order.item} to ${order.client.Fname} ${order.client.Sname}`,
                                category: "Customer Orders"
                            }
                        });
                    }
                    if (!orderPayment) {
                        yield prismaClient_1.default.payments.create(Object.assign({ orderId }, payments));
                    }
                    else {
                        const updatedPayments = {};
                        if (payments.totalAmount)
                            updatedPayments.totalAmount = payments.totalAmount;
                        if (payments.paidAmount)
                            updatedPayments.paidAmount = payments.paidAmount;
                        yield prismaClient_1.default.payments.update({
                            where: { orderId },
                            data: Object.assign({}, updatedPayments)
                        });
                    }
                }
                return { status: 'Success', message: 'Customer Order Updated Successfully' };
            }
            catch (error) {
                console.log(error);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        addPayment: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { orderId, paidAmount, totalAmount }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const order = yield prismaClient_1.default.orders.findUnique({ where: { id: orderId }, include: { client: true } });
                if (!order)
                    return { status: 'Error', message: `Order with Id ${orderId} Not Found` };
                if (totalAmount === paidAmount) {
                    yield prismaClient_1.default.income.create({
                        data: {
                            businessId: order.businessId,
                            amount: totalAmount,
                            description: `Sold a ${order.item} to ${order.client.Fname} ${order.client.Sname}`,
                            category: "Customer Orders"
                        }
                    });
                }
                const orderPayment = yield prismaClient_1.default.payments.findUnique({ where: { orderId } });
                if (!orderPayment) {
                    yield prismaClient_1.default.payments.create({
                        data: { orderId, paidAmount, totalAmount }
                    });
                }
                else {
                    yield prismaClient_1.default.payments.update({
                        where: { orderId },
                        data: { paidAmount, totalAmount }
                    });
                }
                return { status: 'Success', message: 'Payments Updated Successfully' };
            }
            catch (error) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        }),
        deleteOrder: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { orderIds }, { user_id }) {
            try {
                const user = yield prismaClient_1.default.users.findUnique({ where: { id: user_id } });
                if (!user || user.role !== 'USER')
                    return { status: 'Error', message: 'Not Authorized' };
                const business = yield prismaClient_1.default.businesses.findUnique({ where: { userId: user_id } });
                if (!business)
                    return { status: 'Error', message: `Business with User Id : ${user_id} Not Found` };
                const integerOrderIds = orderIds.map((id) => parseInt(id, 10)).filter((id) => !isNaN(id));
                // check if a client has multiple orders so as to change active order status
                for (let i in integerOrderIds) {
                    const order = yield prismaClient_1.default.orders.findUnique({ where: { id: Number(integerOrderIds[i]) } });
                    // console.log("ORDER FOUND ON LOOP", order, "ID:::", integerOrderIds[i])
                    const clientId = order === null || order === void 0 ? void 0 : order.clientId;
                    const clientOrdersCount = yield prismaClient_1.default.orders.count({
                        where: {
                            clientId,
                            completionStatus: { in: ['InProgress', 'InProgress'] }
                        }
                    });
                    if (clientOrdersCount === 1) {
                        yield prismaClient_1.default.clients.update({
                            where: { id: clientId },
                            data: { activeOrder: false }
                        });
                    }
                    else {
                        continue;
                    }
                }
                yield prismaClient_1.default.orders.deleteMany({
                    where: {
                        id: {
                            in: integerOrderIds,
                        }
                    }
                });
                const ordersLength = orderIds.length;
                return {
                    status: 'Success',
                    message: `${ordersLength} ${ordersLength == 1 ? 'Order' : 'Orders'} Deleted Successfully`
                };
            }
            catch (error) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured' };
            }
        })
    }
};
exports.default = ordersResolvers;
