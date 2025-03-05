import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET_KEY as 'string'

export function generateJWTToken(user_id: any): string {
    return jwt.sign({user_id}, JWT_SECRET, {expiresIn: '72hrs'});
}

export function verifyToken(token: string): string | any {
    const payload: any = jwt.verify(token, JWT_SECRET);
    return payload.user_id
}