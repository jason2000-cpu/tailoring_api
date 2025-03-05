import { Request } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY as 'string'


const authenticateUser = (req: Request) => {
    const token = req.cookies.token;

    // console.log("REQUEST::::" ,req.cookies)
    if (!token) return null;

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { user_id: Number};
        return decoded.user_id
    } catch (error: any) {
        return null
    }
};

export default authenticateUser;