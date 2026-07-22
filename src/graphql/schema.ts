import { builder } from "./builder";
import './auth';
import './business';
import './businessClients';
import './expenses';
import './financialRecords';
import './income';
import './orders';

builder.mutationType({})
builder.queryType({})
// builder.subscriptionType({})

export const schema = builder.toSchema();






// import { gql } from "apollo-server-express"
// import authResolvers from "./resolvers/authResolvers"
// import { makeExecutableSchema } from '@graphql-tools/schema'
// import userResolvers from "./resolvers/userResolvers"
// import incomeResolvers from "./resolvers/incomeResolvers"
// import expensesResolvers from "./resolvers/expensesResolvers"
// import financialRecordsResolvers from "./resolvers/financialRecordsResolvers"
// import clientResolvers from "./resolvers/clientsResolvers"
// import ordersResolvers from "./resolvers/ordersResolvers"
// import eventResolvers from "./resolvers/eventsResolvers"
// import businessResolvers from "./resolvers/businessResolvers"
// import measurementsResolvers from "./resolvers/measurementsResolvers"


// export const typeDefs = gql`
//     scalar Date
//     scalar Upload

    // type User {
    //     id: ID!
    //     Fname: String!
    //     Sname: String!
    //     email: String!
    //     phone: String
    //     profile_url: String
    //     password: String!
    //     role: String!
    //     accountStatus: Boolean!
    //     notifications: [Notifications]
    //     events: [Event]
    //     business: Business
    // }

    // type Business {
    //     id: ID
    //     name: String
    //     email: String
    //     phone: String
    //     currency: String
    //     address: String
    //     logo: String
    //     clients: [Clients]
    //     financialRecords: [FinancialRecord]
    //     income: [Income]
    //     expenses: [Expenses]
    // }

    // type Clients {
    //     id: ID!
    //     Fname: String!
    //     Sname: String!
    //     email: String
    //     phone: String!
    //     activeOrder: Boolean!
    //     measurements: Measurements
    //     orders: [Order]
    // }

    // type Notifications {
    //     id: ID!
    //     userId: Int!
    //     read: Boolean!
    //     message: String!
    //     type: String!
    //     createdAt: Date!

    // }

    // type Measurements {
    //     id: ID!
    //     clientId: Int
    //     client: Clients
    //     height: String
    //     shoulders: String
    //     hand: String
    //     chest: String
    //     waist: String
    //     hips: String
    // }
    
//     type Payments {
//         id: ID!
//         garmentId: Int!
//         order:  Order
//         paidAmount: Float!
//         totalAmount: Float!
//         createdAt: Date!
//     }

    // type Order {
    //     id: ID!
    //     clientId: Int!
    //     client: Clients,
    //     completionStatus: String!
    //     description: String
    //     item: String!
    //     collectionDate: Date!
    //     payments: Payments
    // }

    // type Income {
    //     id: ID!
    //     amount: Float!
    //     businessId: Int!
    //     category: String!
    //     description: String!
    //     createdAt: Date!
    // }

    // type Expenses {
    //     id: ID!
    //     amount: Float!
    //     businessId: Int!
    //     category: String!
    //     description: String!
    //     createdAt: Date!
    // }
    
    // type FinancialRecord {
    //     id: ID!
    //     businessId: Int!
    //     date: Date!
    //     income: Float!
    //     expenses: Float!
    //     profit: Float!
    //     createdAt: Date!
    //     updatedAt: Date!
    // }

    // type Event {
    //     id: ID!
    //     title: String!
    //     start: Date!
    //     end: Date!
    //     description: String!
    //     userId: Int!
    // }

//     type LoginRes {
//         status: String!
//         message: String!
//         role: String
//     }

//     type response {
//         status: String!
//         message: String!
//     }
    
//     type usersQueryRes {
//         status: String!
//         message: String!
//         users: [User]
//     }
    
//     type userQueryRes {
//         status: String!
//         message: String!
//         user: User
//     }
    
//     type response {
//         message: String!
//         status: String!
//     }
    
//     type statsResponse {
//         status: String
//         message: String
//         total: Float!
//     }
    
//     type incomeResponse {
//         status: String!
//         message: String!
//         businessIncome: [Income]
//     }

//     type expensesResponse {
//         status: String!
//         message: String!
//         businessExpenses: [Expenses]
//     }
    
//     type financialRecordsResponse {
//         status: String!
//         message: String!
//         financialRecords: [FinancialRecord]
//     }
    
//     type businessClientsResponse {
//         status: String!
//         message: String!
//         businessClients: [Clients]
//     }
    
//     type businessOrdersResponse {
//         status: String!
//         message: String!
//         businessOrders: [Order]
//     }
    
//     type getOrderResponse {
//         status: String!
//         message: String!
//         orders: [Order]
//     }

//     type FinancialSummary {
//         date: String!
//         income: Float!
//         expenses: Float!
//         profit: Float!
//     }
    
//     type getBusinessesResponse {
//         status: String!
//         message: String!
//         businesses: [Business]
//     }
    
//     type userEventsResponse {
//         status: String!
//         message: String!
//         events: [Event]
//     }

//     input BusinessInput {
//         name: String!
//         email: String!
//         phone: String! 
//         currency: String
//         address: String!
//     }

//     input BusinessUpdateInput {
//         businessId: Int!
//         name: String
//         email: String
//         phone: String
//         address: String
//     }

//     input CreateUserInput {
//         Fname: String!
//         Sname: String!
//         email: String!
//         phone: String!
//         role: String!
//         password: String!
//         business: BusinessInput
//     }
    
//     input UpdateUserInput {
//         userId: Int!
//         Fname: String
//         Sname: String
//         email: String
//         phone: String
//         role: String
//         business: BusinessUpdateInput
//     }
    
//     input MeasurementsInput {
//         clientId: Int
//         height: String!
//         shoulders: String!
//         hand: String!
//         chest: String!
//         waist: String!
//         hips: String!
//     }

//     input AddClientInput {
//         Fname: String!
//         Sname: String!
//         email: String!
//         phone: String!
//         measurements: MeasurementsInput
//     }

//     input UpdateMeasurementsInput {
//         height: String
//         shoulders: String
//         hand: String
//         chest: String
//         waist: String
//         hips: String
//     }

//     input UpdateClientInput {
//         id: String!
//         Fname: String
//         Sname: String
//         email: String
//         phone: String
//         measurements: UpdateMeasurementsInput
//     }
    
//     input PaymentsInput {
//         paidAmount: Float
//         totalAmount: Float
//     }
    
//     input AddOrderInput {
//         customerId: Int!
//         item: String!
//         description: String
//         completionStatus: String!
//         collectionDate: Date!
//         payments: PaymentsInput
//     }
    
//     input UpdateOrderInput {
//         orderId: Int!
//         description: String
//         item: String
//         completionStatus: String
//         collectionDate: Date
//         payments: PaymentsInput
//     }

//     type Subscription {
//         newNotification(userId: String!): Notifications!
//     }

//     type Query {
//         users: usersQueryRes!
//         user: userQueryRes!
//         getBusinessClients: businessClientsResponse!
//         getBusinessIncome: incomeResponse!
//         getBusinessExpenses: expensesResponse!
//         getUserFinancialRecords: financialRecordsResponse!
//         financialSummary(groupBy: String!, startDate: String, endDate: String): [FinancialSummary]!
//         getBusinessOrders: businessOrdersResponse!
//         getOrder(clientId: Int!): getOrderResponse!
//         getAllUserEvents: userEventsResponse!
//         getBusinesses: getBusinessesResponse!
//         getLast30DaysIncome: statsResponse!
//         getLast30DaysExpenses: statsResponse!
//         getNotifications(userId: Int!):[Notifications!]!
//     }

//     type Mutation {
//         userLogin(email: String!, password: String!): LoginRes!
//         userLogout: response!
//         createUser(input: CreateUserInput!): response!
//         passwordResetRequest(email: String!): response!
//         passwordReset(toke: String!, newPassword: String!): response!
//         updateUserProfile( Fname: String, Sname: String, email: String, phone: String, password: String, profile_url: String): response!
//         updateUser(input: UpdateUserInput!): response!
//         updateUserProfilePic(image: Upload!): response!
//         deleteUser(userIds: [String!]!): response!
//         addIncome(amount: Float!, description: String!, category: String!): response!
//         updateIncome(incomeId: Int!, amount: Float, description: String, category: String): response!
//         deleteIncome(incomeIds: [String!]!): response!
//         addExpense(amount: Float!, description: String!, category: String!): response!
//         updateExpense(expenseId: Int!, amount: Float, description: String, category: String): response!
//         deleteExpense(expenseIds: [String!]!): response!
//         addClient(input: AddClientInput!): response!
//         updateClient(input: UpdateClientInput): response!
//         addMeasurements(input: MeasurementsInput): response!
//         deleteClient(clientIds: [String!]!): response!
//         addOrder(input: AddOrderInput!): response!
//         updateOrder(input: UpdateOrderInput!): response!
//         addPayment(orderId: Int!, paidAmount: Int!, totalAmount: Int!): response!
//         deleteOrder(orderIds: [String!]!): response!
//         addEvent(title: String!, start: Date!, end: Date!, description: String!): response!
//         updateEvent(eventId: Int!, title: String, start: Date, end: Date, description: String): response!
//         deleteEvent(eventId: Int!): response!
//         updateBusinessDetails(businessId: Int!, name: String, logo: String, phone: String, email: String, currency: String, address: String ): response!
//         updateBusinessLogo(businessId: String!, logo: Upload!): response!
//         deleteBusiness(businessId: Int!): response!
//         deleteFinancialRecord(id: Int!): response!
//         markNotificatioinAsRead(id: ID!): Notifications!
//         toggleActivation(userId: Int!): response!
//     }
// `

// export const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers: {
//         Query : {
//             ...userResolvers.Query,
//             ...incomeResolvers.Query,
//             ...expensesResolvers.Query,
//             ...financialRecordsResolvers.Query,
//             ...clientResolvers.Query,
//             ...ordersResolvers.Query,
//             ...eventResolvers.Query,
//             ...businessResolvers.Query,
//         },
//         Mutation: {
//             ...authResolvers.Mutation,
//             ...userResolvers.Mutation,
//             ...incomeResolvers.Mutation,
//             ...expensesResolvers.Mutation,
//             ...clientResolvers.Mutation,
//             ...ordersResolvers.Mutation,
//             ...eventResolvers.Mutation,
//             ...businessResolvers.Mutation,
//             ...financialRecordsResolvers.Mutation,
//             ...measurementsResolvers.Muation,
//         }
//     }
// })
