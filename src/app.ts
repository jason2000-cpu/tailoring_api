import express, { Application } from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config();

const app: Application = express()

const corsOptions = {
    origin: ['http://localhost:5173', 'https://mavazidesk.vercel.app' ],
    credentials: true,
}


app.use(cors(corsOptions));
app.options('/graphql', cors(corsOptions));
app.use(cookieParser())




export default app