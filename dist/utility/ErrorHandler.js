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
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    process.on("uncaughtException", (ex) => {
        console.log("uncaughtException", ex);
        process.exit(1);
    });
    process.on("unhandledRejection", (ex) => {
        console.log("unhandledRejection", ex);
        process.exit(1);
    });
    console.log("cause", err.cause);
    res.status(500).json({ message: "Something went wrong", error: err.message });
    next();
});
exports.errorHandler = errorHandler;
//# sourceMappingURL=ErrorHandler.js.map