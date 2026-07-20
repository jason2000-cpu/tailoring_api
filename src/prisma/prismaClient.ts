import { PrismaClient, CompletionStatus } from "@prisma/client";
import synchronizeFinancialRecords from "../middleware/synchronizeFinancialRecords";
import { PrismaPg } from "@prisma/adapter-pg";


const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter }).$extends({
    query: {
        $allModels: {
            async $allOperations({ model, operation, args, query}: any) {
                const result = await query(args);

                if (
                    (model === 'Income' || model === 'Expenses') &&
                    ['create', 'update', 'delete'].includes(operation)
                ) {
                    await synchronizeFinancialRecords({ model, action: operation, args })
                } else if(
                    model === 'Orders' &&
                    ['create', 'update', 'delete'].includes(operation)
                ) {
                    const order = result as { clientId: number }

                    if (order && order.clientId) {
                        const inProgressOrders = await prisma.orders.count({
                            where: {
                                clientId: order.clientId,
                                completionStatus: CompletionStatus.InProgress
                            }
                        });

                        await prisma.clients.update({
                            where: { id: order.clientId },
                            data: { activeOrder: inProgressOrders > 0 }
                        });
                    }
                }
                return result;
            }
        }
    }
})

export default prisma;

// prisma.$use(async (params, next) => {
//     const result = await next(params);

//     if(
//         (params.model === 'Income' || params.model === 'Expenses') && 
//         ['create', 'update', 'delete'].includes(params.action)
//     ) {
//         await synchronizeFinancialRecords(params)
//     } else if( 
//         params.model === 'Orders' && 
//         ['create', 'update', 'delete'].includes(params.action)
//     ){
//         const order = result as { clientId: number }

//         if(order && order.clientId) {
//             const inProgressOrders = await prisma.orders.count({
//                 where: {
//                     clientId: order.clientId,
//                     completionStatus: CompletionStatus.InProgress
//                 },
//             });

//             await prisma.clients.update({
//                 where: { id: order.clientId},
//                 data: { activeOrder: inProgressOrders > 0 }
//             })
//         }
//     }

//     // console.log("RESULT::::", result);

//     return result;
// })

// export default prisma
