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
exports.UserService = void 0;
const AuthUtility_1 = require("./../utility/AuthUtility");
const user_repository_1 = require("../database/repository/user-repository");
class UserService {
    constructor() {
        this.repository = new user_repository_1.UserRepository();
    }
    getUserProfile(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield this.repository.findById(_id);
                return (0, AuthUtility_1.FormateData)(profile);
            }
            catch (error) {
                throw new Error("API Error", { cause: error });
            }
        });
    }
    updateUserProfile(_id, updateUserProfileInputs) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.repository.update(_id, updateUserProfileInputs);
                return (0, AuthUtility_1.FormateData)(user);
            }
            catch (error) {
                throw new Error("API Error", { cause: error });
            }
        });
    }
    addUpdateUserAddress(_id, createUpdateAddressInputs) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.repository.addAddress(_id, createUpdateAddressInputs);
                return (0, AuthUtility_1.FormateData)(user);
            }
            catch (error) {
                throw new Error("API Error", { cause: error });
            }
        });
    }
    addUpdateUserCompany(_id, createUpdateCompanyInputs) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.repository.addCompany(_id, createUpdateCompanyInputs);
                return (0, AuthUtility_1.FormateData)(user);
            }
            catch (error) {
                throw new Error("API Error", { cause: error });
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map