"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CompanySchema = new mongoose_1.default.Schema({
    name: { type: String },
    catchPhrase: { type: String },
    bs: { type: String },
    code: { type: String, required: true },
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        },
    },
    timestamps: true,
});
const Company = mongoose_1.default.model("Company", CompanySchema);
exports.Company = Company;
//# sourceMappingURL=Company.js.map