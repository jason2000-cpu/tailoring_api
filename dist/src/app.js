"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const corsOptions = {
    origin: ['http://localhost:5173', 'http://192.168.1.14:5173', 'https://antiago.goymarey.com', 'https://tailoring-system.vercel.app'],
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.options('/graphql', (0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
exports.default = app;
