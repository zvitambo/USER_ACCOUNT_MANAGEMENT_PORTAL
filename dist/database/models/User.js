"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    salt: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String },
    verified: { type: Boolean, required: true, default: false },
    otp: { type: Number },
    otp_expiry: { type: Date },
    address: { type: String },
    website: { type: String },
    company: { type: String }, // CompanyDoc
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
            delete ret.salt;
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        },
    },
    timestamps: true,
});
const User = mongoose_1.default.model('User', UserSchema);
exports.User = User;
