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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const login_entity_1 = require("./entities/login.entity");
const md5_typescript_1 = require("md5-typescript");
const jwt = require("jsonwebtoken");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let LoginService = class LoginService {
    constructor(userRP) {
        this.userRP = userRP;
    }
    async create(createLoginDto) {
        const user = await this.userRP.findOne({ name: createLoginDto.name });
        if (user) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'User existed!'
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        ;
        const createdUser = await this.userRP.save(Object.assign(Object.assign({}, createLoginDto), { password: md5_typescript_1.Md5.init(createLoginDto.password) }));
        return createdUser;
    }
    async login(user) {
        const userLogin = await this.userRP.findOne({
            name: user.name,
            password: md5_typescript_1.Md5.init(user.password)
        });
        if (!userLogin) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'User existed!'
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        ;
        const token = jwt.sign({ userLogin }, `${process.env.API_SECRET}`, { expiresIn: 60 * 60 * 24 * 365 });
        return token;
    }
    async information(user) {
        const { id } = user;
        const userLogin = await this.userRP.findOne({
            id: id
        });
        delete userLogin.password;
        return userLogin;
    }
    async findAll() {
        const userLogin = await this.userRP.find();
        return userLogin;
    }
    findOne(id) {
        return `This action returns a #${id} login`;
    }
    update(id, updateLoginDto) {
        return `This action updates a #${id} login`;
    }
    async remove(id) {
        return await this.userRP.delete({
            id: id
        });
    }
    async findUser(user) {
        let name = user.userLogin.name;
        let rs = await this.userRP.findOne({ name: name });
        return rs;
    }
};
LoginService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(login_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map