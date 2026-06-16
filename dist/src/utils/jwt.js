"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWTToken = generateJWTToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET_KEY;
function generateJWTToken(user_id) {
    return jsonwebtoken_1.default.sign({ user_id }, JWT_SECRET, { expiresIn: '72hrs' });
}
function verifyToken(token) {
    const payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    return payload.user_id;
}
