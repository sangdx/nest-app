import { Injectable } from '@nestjs/common';
import { LoginService } from '../login/login.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private LoginService: LoginService,
    private jwtService: JwtService
    ) {}

  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.LoginService.findUser(name);
    if (user) {
      const {...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.userId };
    return {
        // eslint-disable-next-line @typescript-eslint/camelcase
        access_token: this.jwtService.sign(payload),
    };
  }
}
