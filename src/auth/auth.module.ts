import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginModule } from '../login/login.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config'
@Module({
  imports: [
    LoginModule,
    ConfigModule,
    JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
            secret: process.env.API_SECRET,
            signOptions: { expiresIn: '60s' },
        }),
        inject: [ConfigService],
    }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [],
  exports: [AuthService],
})
export class AuthModule {}
