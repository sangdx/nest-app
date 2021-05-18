import { CreateLoginDto, LoginUser } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { User } from './entities/login.entity';
import { Repository } from "typeorm";
export declare class LoginService {
    private readonly userRP;
    constructor(userRP: Repository<User>);
    create(createLoginDto: CreateLoginDto): Promise<User>;
    login(user: LoginUser): Promise<any>;
    information(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): string;
    update(id: number, updateLoginDto: UpdateLoginDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findUser(user: any): Promise<any>;
}
