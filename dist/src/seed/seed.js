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
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require(".prisma/client");
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const authUtils_1 = require("../utils/authUtils");
dotenv_1.default.config();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        const email = (_a = process.env.SEED_ADMIN_EMAIL) === null || _a === void 0 ? void 0 : _a.trim();
        const password = process.env.SEED_ADMIN_PASSWORD;
        const Fname = ((_b = process.env.SEED_ADMIN_FIRST_NAME) === null || _b === void 0 ? void 0 : _b.trim()) || "Admin";
        const Sname = ((_c = process.env.SEED_ADMIN_LAST_NAME) === null || _c === void 0 ? void 0 : _c.trim()) || "User";
        const userEmail = (_d = process.env.SEED_USER_EMAIL) === null || _d === void 0 ? void 0 : _d.trim();
        const userPassword = process.env.SEED_USER_PASSWORD;
        const userFname = ((_e = process.env.SEED_USER_FIRST_NAME) === null || _e === void 0 ? void 0 : _e.trim()) || "Tailor";
        const userSname = ((_f = process.env.SEED_USER_LAST_NAME) === null || _f === void 0 ? void 0 : _f.trim()) || "User";
        if (!email || !password) {
            console.error("Set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD in the environment (e.g. Backend/.env) before running the seed.");
            process.exit(1);
        }
        const hashedPassword = yield (0, authUtils_1.hashPassword)(password);
        const hashedUserPassword = yield (0, authUtils_1.hashPassword)(userPassword);
        // Create Admin
        yield prismaClient_1.default.users.upsert({
            where: { email },
            update: {
                password: hashedPassword,
                role: client_1.Role.ADMIN,
                Fname,
                Sname,
            },
            create: {
                email,
                password: hashedPassword,
                Fname,
                Sname,
                role: client_1.Role.ADMIN,
                isEmailVerified: true,
                twoFactorEnabled: false,
            },
        });
        console.log(`Admin user ready: ${email}`);
        // Create User
        yield prismaClient_1.default.users.upsert({
            where: { email: userEmail },
            update: {
                password: userPassword,
                role: client_1.Role.ADMIN,
                Fname: userFname,
                Sname: userSname,
            },
            create: {
                email: userEmail,
                password: hashedUserPassword,
                Fname: userFname,
                Sname: userSname,
                role: client_1.Role.ADMIN,
                isEmailVerified: true,
                twoFactorEnabled: false,
            },
        });
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaClient_1.default.$disconnect();
}));
