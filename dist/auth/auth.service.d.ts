import { LoginService } from '../login/login.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private LoginService;
    private jwtService;
    constructor(LoginService: LoginService, jwtService: JwtService);
    validateUser(name: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
