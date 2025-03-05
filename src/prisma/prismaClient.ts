import { PrismaClient, CompletionStatus } from "@prisma/client";
import synchronizeFinancialRecords from "../middleware/synchronizeFinancialRecords";


const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
    const result = await next(params);

    if(
        (params.model === 'Income' || params.model === 'Expenses') && 
        ['create', 'update', 'delete'].includes(params.action)
    ) {
        await synchronizeFinancialRecords(params)
    } else if( 
        params.model === 'Orders' && 
        ['create', 'update', 'delete'].includes(params.action)
    ){
        const order = result as { clientId: number }

        if(order && order.clientId) {
            const inProgressOrders = await prisma.orders.count({
                where: {
                    clientId: order.clientId,
                    completionStatus: CompletionStatus.InProgress
                },
            });

            await prisma.clients.update({
                where: { id: order.clientId},
                data: { activeOrder: inProgressOrders > 0 }
            })
        }
    }

    // console.log("RESULT::::", result);

    return result;
})

export default prisma