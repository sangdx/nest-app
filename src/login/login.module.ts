import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import {UserRepository} from './repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserRepository,
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [TypeOrmModule, LoginService]
})
export class LoginModule {}
