import { LoginService } from './login.service';
import { CreateLoginDto, LoginUser } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { User } from './entities/login.entity';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    create(createLoginDto: CreateLoginDto): Promise<User>;
    login(login: LoginUser): Promise<any>;
    getInfo(user: User): Promise<User>;
    findAll(user: User): Promise<User[]>;
    findOne(id: string): string;
    update(id: string, updateLoginDto: UpdateLoginDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
