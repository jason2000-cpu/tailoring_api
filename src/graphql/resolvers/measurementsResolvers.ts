import prisma from '../../lib/prismaClient';


const measurementsResolvers = {
    Muation: {
        addMeasurements: async (_:any, {input}: any, { user_id }: { user_id: number }) => {
            const { clientId,  height, shoulders, hand, chest, waist,  } = input;
            try {
                const client = await prisma.clients.findUnique({ where: { id: clientId }});
                if(!client) return { status: 'Error', message: `Client With Id ${clientId} Not Found`}

                await prisma.measurements.create({
                    data: {...input}
                })

                return { status: 'Success', message: 'Measurements Added Successfully'}
            }catch(error: any) {
                console.log(error.message);
                return { status: 'Error', message: 'An Internal Server Error Occured'}
            }
        }
    }
}

export default measurementsResolvers;
