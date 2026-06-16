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
const body_parser_1 = require("body-parser");
const express4_1 = require("@apollo/server/express4");
const authMiddleware_1 = __importDefault(require("./src/middleware/authMiddleware"));
const server_1 = require("@apollo/server");
const schema_1 = require("./src/graphql/schema");
const app_1 = __importDefault(require("./src/app"));
const graphql_1 = require("graphql");
const PORT = process.env.PORT || 3000;
const server = new server_1.ApolloServer({
    schema: schema_1.schema,
    introspection: true
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    app_1.default.use('/graphql', (0, body_parser_1.json)(), (0, express4_1.expressMiddleware)(server, {
        context: (_a) => __awaiter(void 0, [_a], void 0, function* ({ req, res }) {
            var _b, _c, _d;
            console.log("[OPERATION_NAME]:", (_b = req.body) === null || _b === void 0 ? void 0 : _b.operationName);
            const isLoginMutation = ((_c = req.body) === null || _c === void 0 ? void 0 : _c.operationName) === "UserLogin";
            const isIntrospection = ((_d = req.body) === null || _d === void 0 ? void 0 : _d.operationName) === 'IntrospectionQuery';
            if (isLoginMutation || isIntrospection)
                return { req, res };
            // const isCreateUserMutation = req.body?.operationName === "CreateUser"
            // if(isCreateUserMutation) return { req, res }
            try {
                let user_id = (0, authMiddleware_1.default)(req);
                if (!user_id) {
                    throw new graphql_1.GraphQLError("Unauthorized", {
                        extensions: { code: "UNAUTHORIZED" }
                    });
                }
                return { user_id, req, res };
            }
            catch (error) {
                console.log("Context error:", error);
                throw new graphql_1.GraphQLError(error.message || "Authentication Failed", {
                    extensions: {
                        code: "UNAUTHORIZED",
                        http: { status: 401 }
                    }
                });
            }
        })
    }));
    app_1.default.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}/graphql`);
    });
});
startServer();
