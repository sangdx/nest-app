import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService, configService: ConfigService);
    validate(name: string, password: string): Promise<any>;
}
export {};
