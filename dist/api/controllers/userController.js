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
exports.addUpdateUserCompany = exports.addUpdateUserAddress = exports.updateUserProfile = exports.getUserProfile = void 0;
const user_service_1 = require("./../../services/user-service");
const userService = new user_service_1.UserService();
const getUserProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.user;
        const data = yield userService.getUserProfile(_id);
        return res.status(200).json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.getUserProfile = getUserProfile;
const updateUserProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.user;
        const { firstName, lastName, userName, phone, website } = req.body;
        const data = yield userService.updateUserProfile(_id, {
            firstName,
            lastName,
            userName,
            phone,
            website,
        });
        return res.status(200).json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.updateUserProfile = updateUserProfile;
const addUpdateUserAddress = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.user;
        const { street, suite, city, zipcode, lat, lng } = req.body;
        const data = yield userService.addUpdateUserAddress(_id, {
            street,
            suite,
            city,
            zipcode,
            lat,
            lng,
        });
        return res.status(200).json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.addUpdateUserAddress = addUpdateUserAddress;
const addUpdateUserCompany = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.user;
        const { name, catchPhrase, bs, code } = req.body;
        const data = yield userService.addUpdateUserCompany(_id, {
            name,
            catchPhrase,
            bs,
            code
        });
        return res.status(200).json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.addUpdateUserCompany = addUpdateUserCompany;
//# sourceMappingURL=userController.js.map