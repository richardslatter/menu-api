"use strict";
/**
 * Required External Modules
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const items_router_1 = require("./items/items.router");
const error_middleware_1 = require("./middleware/error.middleware");
const not_found_middleware_1 = require("./middleware/not-found.middleware");
const items_sql_service_1 = require("./items/items.sql.service");
const promise_1 = __importDefault(require("mysql2/promise"));
dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const app = (0, express_1.default)();
/**
 *  App Configuration
 */
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/menu/items", items_router_1.itemsRouter);
app.use(error_middleware_1.errorHandler);
app.use(not_found_middleware_1.notFoundHandler);
/**
 * mySQL Setup
 */
exports.connection = promise_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'menu'
});
//const newItem = NewFind(1);
const query1 = (0, items_sql_service_1.newfindAll)();
const query = (0, items_sql_service_1.newfind)();
console.log(query);
//newItem.then(data => console.log(data));
//newItems.then(data => console.log(data));
console.log('test');
//console.log(newItems);
//console.log(newItem);
/**
 * Server Activation
 */
exports.connection
    .then(() => app.listen(PORT, () => {
    const tempString = "test";
    console.log('Listening on port', PORT);
}))
    .catch((e) => {
    console.error(e);
    throw new e;
});
//# sourceMappingURL=index.js.map