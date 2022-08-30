"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.MONGO_URI = exports.APP_SECRET = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.APP_SECRET = process.env.APP_SECRET || 'my_temp_app_secret';
exports.MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/users";
exports.PORT = process.env.PORT || 9000;
//# sourceMappingURL=index.js.map