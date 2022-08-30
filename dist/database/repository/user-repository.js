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
    addAddress(_id, createUpdateAddressInputs) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield models_1.User.findById(_id);
                if (user) {
                    // let newAddress: AddressDoc;
                    let existingAddress = yield models_1.Address.findOne({
                        street: createUpdateAddressInputs.street,
                        suite: createUpdateAddressInputs.suite,
                    });
                    if (existingAddress) {
                        existingAddress.city = createUpdateAddressInputs.city;
                        existingAddress.zipcode = createUpdateAddressInputs.zipcode;
                        existingAddress.lat = createUpdateAddressInputs.lat;
                        existingAddress.lng = createUpdateAddressInputs.lng;
                        yield existingAddress.save();
                        // const index = user.address.findIndex( a =>
                        // { 
                        //   return a.toString() === existingAddress!._id.toString();
                        // });
                        const index = user.address.findIndex(a => a.toString() === existingAddress._id.toString());
                        if (index !== -1) {
                            user.address[index] = existingAddress;
                        }
                        else {
                            user.address.push(existingAddress);
                        }
                        // newAddress = new Address({ existingAddress, ...createUpdateAddressInputs });
                    }
                    else {
                        let newAddress = new models_1.Address(Object.assign({}, createUpdateAddressInputs));
                        newAddress = yield newAddress.save();
                        user.address.push(newAddress);
                    }
                    yield user.save();
                    return user;
                }
                return null;
            }
            catch (error) {
                throw new Error("API Error", { cause: error });
            }
        });
    }
    addCompany(_id, createUpdateCompanyInputs) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield models_1.User.findById(_id);
                if (user) {
                    let existingCompany = yield models_1.Company.findOne({
                        code: createUpdateCompanyInputs.code,
                    });
                    if (existingCompany) {
                        existingCompany.name = createUpdateCompanyInputs.name;
                        existingCompany.catchPhrase = createUpdateCompanyInputs.catchPhrase;
                        existingCompany.bs = createUpdateCompanyInputs.bs;
                        yield existingCompany.save();
                        const index = user.company.findIndex(c => c._id.toString() === existingCompany._id.toString());
                        if (index !== -1) {
                            user.company[index] = existingCompany;
                        }
                        else {
                            user.company.push(existingCompany);
                        }
                    }
                    else {
                        let newCompany = new models_1.Company(Object.assign({}, createUpdateCompanyInputs));
                        yield newCompany.save();
                        user.company.push(newCompany);
                    }
                    yield user.save();
                    return user;
                }
                return null;
            }
            catch (error) {
                throw new Error("API Error", { cause: error });
            }
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.js.map