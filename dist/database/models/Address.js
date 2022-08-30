"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AddressSchema = new mongoose_1.default.Schema({
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String },
    zipcode: { type: String },
    lat: { type: String },
    lng: { type: String },
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
const Address = mongoose_1.default.model("Address", AddressSchema);
exports.Address = Address;
//# sourceMappingURL=Address.js.map