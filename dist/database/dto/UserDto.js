"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserProfileInputs = exports.UserLoginInputs = exports.CreateUserInputs = void 0;
const class_validator_1 = require("class-validator");
class CreateUserInputs {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserInputs.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Length)(6, 30),
    __metadata("design:type", String)
], CreateUserInputs.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.Length)(8, 18),
    __metadata("design:type", String)
], CreateUserInputs.prototype, "password", void 0);
exports.CreateUserInputs = CreateUserInputs;
class UserLoginInputs {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserLoginInputs.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Length)(8, 18),
    __metadata("design:type", String)
], UserLoginInputs.prototype, "password", void 0);
exports.UserLoginInputs = UserLoginInputs;
class UpdateUserProfileInputs {
}
__decorate([
    (0, class_validator_1.Length)(2, 30),
    __metadata("design:type", String)
], UpdateUserProfileInputs.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.Length)(2, 30),
    __metadata("design:type", String)
], UpdateUserProfileInputs.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.Length)(2, 30),
    __metadata("design:type", String)
], UpdateUserProfileInputs.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.Length)(12, 30),
    __metadata("design:type", String)
], UpdateUserProfileInputs.prototype, "website", void 0);
__decorate([
    (0, class_validator_1.Length)(6, 30),
    __metadata("design:type", String)
], UpdateUserProfileInputs.prototype, "phone", void 0);
exports.UpdateUserProfileInputs = UpdateUserProfileInputs;
//# sourceMappingURL=UserDto.js.map