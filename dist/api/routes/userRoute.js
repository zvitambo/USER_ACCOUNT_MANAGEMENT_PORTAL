"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = express_1.default.Router();
exports.UserRoute = router;
//router.use(Authenticate);
router.get('/me', middlewares_1.Authenticate, controllers_1.getUserProfile);
router.put("/me", middlewares_1.Authenticate, controllers_1.updateUserProfile);
router.post("/address", middlewares_1.Authenticate, controllers_1.addUpdateUserAddress);
router.post("/company", middlewares_1.Authenticate, controllers_1.addUpdateUserCompany);
//# sourceMappingURL=userRoute.js.map