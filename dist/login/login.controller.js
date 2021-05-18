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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const login_service_1 = require("./login.service");
const create_login_dto_1 = require("./dto/create-login.dto");
const update_login_dto_1 = require("./dto/update-login.dto");
const local_auth_guard_1 = require("../auth/local-auth.guard");
const user_decorator_1 = require("../decorators/user.decorator");
const login_entity_1 = require("./entities/login.entity");
let LoginController = class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    create(createLoginDto) {
        return this.loginService.create(createLoginDto);
    }
    login(login) {
        return this.loginService.login(login);
    }
    getInfo(user) {
        return this.loginService.information(user);
    }
    findAll(user) {
        return this.loginService.findAll();
    }
    findOne(id) {
        return this.loginService.findOne(+id);
    }
    update(id, updateLoginDto) {
        return this.loginService.update(+id, updateLoginDto);
    }
    remove(id) {
        return this.loginService.remove(+id);
    }
};
__decorate([
    common_1.Post('/signup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_login_dto_1.CreateLoginDto]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "create", null);
__decorate([
    common_1.Post('/login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_login_dto_1.LoginUser]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "login", null);
__decorate([
    common_1.Get('/info'),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    __param(0, user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_entity_1.User]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getInfo", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    __param(0, user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_entity_1.User]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_login_dto_1.UpdateLoginDto]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "remove", null);
LoginController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map