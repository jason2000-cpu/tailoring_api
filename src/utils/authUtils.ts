import jwt, { SignOptions } from 'jsonwebtoken'
import { StringValue } from 'ms'
import bcrypt from 'bcryptjs'
import { randomBytes } from 'crypto';



// JWT utilities
export const generateAccessToken = (payload: any, expiresIn: StringValue = '15d') => {
  console.log("JWT SECRET HERE >>>> :::::", process.env.JWT_SECRET!);
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, process.env.JWT_SECRET!, options)
}

export const generatePasswrodResetToken = (payload: any, expiresIn: StringValue = '7d') => {
  console.log("JWT SECRET :::::", process.env.JWT_SECRET!);
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, process.env.JWT_SECRET!, options)
}

export const verifyToken = (token: string, secret?: string) => {
  console.log("JWT SECRET ON VERIFYING TOKEN >>>>", process.env.JWT_SECRET!);
  return jwt.verify(token, secret || process.env.JWT_SECRET!)
}

// Password utilities
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12
  return await bcrypt.hash(password, saltRounds)
}

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash)
}


// Error handling utilities
export class AppError extends Error {
  statusCode: number
  isOperational: boolean

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

const otpStore = new Map();

export const  generateOTP = (userId: string) => {
  const otp = randomBytes(3).toString('hex').toUpperCase().slice(0,6);
  const expiry = Date.now() + 10 * 60 * 1000;
  otpStore.set(userId, { otp, expiry });

  return otp;
}

export const verifyOTP = (userId: string, enteredOTP: string) => {
  const record = otpStore.get(userId);
  if (!record) return false;
  if (Date.now() > record.expiry) return false;
  return record.otp === enteredOTP
}