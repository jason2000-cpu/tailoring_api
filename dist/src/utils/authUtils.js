"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOTP = exports.generateOTP = exports.AppError = exports.comparePassword = exports.hashPassword = exports.verifyToken = exports.generatePasswrodResetToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crypto_1 = require("crypto");
// JWT utilities
const generateAccessToken = (payload, expiresIn = '15d') => {
    console.log("JWT SECRET HERE >>>> :::::", process.env.JWT_SECRET);
    const options = { expiresIn };
    return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, options);
};
exports.generateAccessToken = generateAccessToken;
const generatePasswrodResetToken = (payload, expiresIn = '7d') => {
    console.log("JWT SECRET :::::", process.env.JWT_SECRET);
    const options = { expiresIn };
    return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, options);
};
exports.generatePasswrodResetToken = generatePasswrodResetToken;
const verifyToken = (token, secret) => {
    console.log("JWT SECRET ON VERIFYING TOKEN >>>>", process.env.JWT_SECRET);
    return jsonwebtoken_1.default.verify(token, secret || process.env.JWT_SECRET);
};
exports.verifyToken = verifyToken;
// Password utilities
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = 12;
    return yield bcryptjs_1.default.hash(password, saltRounds);
});
exports.hashPassword = hashPassword;
const comparePassword = (password, hash) => __awaiter(void 0, void 0, void 0, function* () {
    return bcryptjs_1.default.compare(password, hash);
});
exports.comparePassword = comparePassword;
// Error handling utilities
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
const otpStore = new Map();
const generateOTP = (userId) => {
    const otp = (0, crypto_1.randomBytes)(3).toString('hex').toUpperCase().slice(0, 6);
    const expiry = Date.now() + 10 * 60 * 1000;
    otpStore.set(userId, { otp, expiry });
    return otp;
};
exports.generateOTP = generateOTP;
const verifyOTP = (userId, enteredOTP) => {
    const record = otpStore.get(userId);
    if (!record)
        return false;
    if (Date.now() > record.expiry)
        return false;
    return record.otp === enteredOTP;
};
exports.verifyOTP = verifyOTP;
