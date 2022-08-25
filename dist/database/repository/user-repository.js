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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const models_1 = require("../models");
class UserRepository {
    find(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield models_1.User.findOne({ email: email });
                return user;
            }
            catch (error) {
                throw new Error("API Error", { cause: error });
            }
        });
    }
    findById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield models_1.User.findById(_id);
                return user;
            }
            catch (error) {
                throw new Error("API Error", { cause: error });
            }
        });
    }
    update(_id, updateUserProfileInputs) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield models_1.User.findById(_id);
                const { firstName, lastName, userName, phone, website } = updateUserProfileInputs;
                if (user) {
                    user.firstName = firstName;
                    user.lastName = lastName;
                    user.userName = userName;
                    user.phone = phone;
                    user.website = website;
                    user = yield user.save();
                    return user;
                }
                return null;
            }
            catch (error) {
                throw new Error("API Error", { cause: error });
            }
        });
    }
    addAddress(street, suite, city, zipcode, geo) {
        throw new Error("Method not implemented.");
    }
    addCompany(name, catchPhrase, bs) {
        throw new Error("Method not implemented.");
    }
}
exports.UserRepository = UserRepository;
