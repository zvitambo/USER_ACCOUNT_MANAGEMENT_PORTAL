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
exports.requestOTP = exports.verifyUser = exports.login = exports.register = void 0;
const auth_service_1 = require("./../../services/auth-service");
const UserDto_1 = require("./../../database/dto/UserDto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
//functionality to handle User Registration, login , OTP verification
const authService = new auth_service_1.AuthService();
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userInputs = (0, class_transformer_1.plainToClass)(UserDto_1.CreateUserInputs, req.body);
        const userInputErrors = yield (0, class_validator_1.validate)(userInputs, {
            validationError: { target: true },
        });
        if (userInputErrors.length > 0)
            return res
                .status(400)
                .json({
                message: "Invalid registration details",
                error: userInputErrors,
            });
        const data = yield authService.register(userInputs);
        if (data)
            return res.status(201).json(data);
        return res.status(400).json({ "message": "registration failed" });
    }
    catch (error) {
        next(error);
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userLoginInputs = (0, class_transformer_1.plainToClass)(UserDto_1.UserLoginInputs, req.body);
        const userInputErrors = yield (0, class_validator_1.validate)(userLoginInputs, {
            validationError: { target: true },
        });
        if (userInputErrors.length > 0)
            return res.status(400).json({
                message: "Invalid login details",
                error: userInputErrors,
            });
        const data = yield authService.login(userLoginInputs);
        if (data)
            return res.status(201).json(data);
        return res.status(400).json({ message: "login failed" });
    }
    catch (error) {
        next(error);
    }
});
exports.login = login;
const verifyUser = () => { };
exports.verifyUser = verifyUser;
const requestOTP = () => { };
exports.requestOTP = requestOTP;
