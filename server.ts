import { json } from 'body-parser';
import { expressMiddleware  } from '@apollo/server/express4';
import authenticateUser from './src/middleware/authMiddleware';
import { Request, Response } from 'express'
import { ApolloServer } from '@apollo/server';
import { schema } from './src/graphql/schema'
import app from "./src/app";
import { GraphQLError } from 'graphql';

const PORT =process.env.PORT || 3000


const server = new ApolloServer({
    schema
})

const startServer = async () => {
    await server.start();

    app.use(
        '/graphql', 
        json(), 
        expressMiddleware(server, { 
            context:  async({ req, res }: { req: Request; res: Response}) => {

                const isLoginMutation = req.body?.operationName === "UserLogin"
                if(isLoginMutation) return { req, res }

                // const isCreateUserMutation = req.body?.operationName === "CreateUser"
                // if(isCreateUserMutation) return { req, res }

                try {
                    let user_id = authenticateUser(req);
                    if(!user_id) {
                        throw new GraphQLError("Unauthorized", {
                            extensions: { code: "UNAUTHORIZED"}
                        })
                    }
                
                    return { user_id, req, res}
                } catch(error:any) {
                    console.log("Context error:", error);

                    throw new GraphQLError(error.message || "Authentication Failed", {
                        extensions: {
                            code: "UNAUTHORIZED",
                            http: { status: 401 }
                        }
                    })
                }
        } 
    }))
    app.listen(PORT, ()=> {
        console.log(`Server running on http://localhost:${PORT}/graphql`)
    })
}



startServer()