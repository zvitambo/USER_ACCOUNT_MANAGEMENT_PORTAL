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
exports.AuthService = void 0;
const AuthUtility_1 = require("./../utility/AuthUtility");
const bcrypt_1 = require("bcrypt");
const auth_repository_1 = require("./../database/repository/auth-repository");
//All business logic will be here 
class AuthService {
    constructor() {
        this.repository = new auth_repository_1.AuthRepository();
    }
    register(userInputs) {
        return __awaiter(this, void 0, void 0, function* () {
            const { phone, password, email } = userInputs;
            try {
                const salt = yield (0, bcrypt_1.genSalt)();
                const hashedPassword = yield (0, AuthUtility_1.GeneratePassword)(password, salt);
                const newUser = yield this.repository.register(phone, hashedPassword, email, salt);
                let payload = {
                    verified: false,
                    email: newUser.email,
                    username: newUser.userName,
                    _id: newUser._id,
                };
                const token = (0, AuthUtility_1.GenerateSignature)(payload);
                return (0, AuthUtility_1.FormateData)({ id: newUser._id, token: token });
            }
            catch (error) {
                throw new Error("API Error", { cause: error });
            }
        });
    }
    login(userInputs) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, email } = userInputs;
            try {
                const existingUser = yield this.repository.find(email);
                if (existingUser) {
                    const validate = yield (0, AuthUtility_1.ValidatePassword)(password, existingUser.password, existingUser.salt);
                    if (validate) {
                        let payload = {
                            verified: false,
                            email: existingUser.email,
                            username: existingUser.userName,
                            _id: existingUser._id,
                        };
                        const token = (0, AuthUtility_1.GenerateSignature)(payload);
                        return (0, AuthUtility_1.FormateData)({ id: existingUser._id, token });
                    }
                }
                return (0, AuthUtility_1.FormateData)(null);
            }
            catch (error) {
                throw new Error("API Error", { cause: error });
            }
        });
    }
}
exports.AuthService = AuthService;
