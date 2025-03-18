import express, { Application } from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config();

const app: Application = express()

const corsOptions = {
    origin: ['http://localhost:5173', 'http://192.168.1.14:5173', 'https://antiago.goymarey.com', 'https://tailoring-system.vercel.app' ],
    credentials: true,
}


app.use(cors(corsOptions));
app.options('/graphql', cors(corsOptions));
app.use(cookieParser())




export default app