import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto, LoginUser } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { CurrentUser} from '../decorators/user.decorator';
import {User} from './entities/login.entity';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/signup')
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @Post('/login')
  login(@Body() login: LoginUser) {
    return this.loginService.login(login);
  }

  @Get('/info')
  @UseGuards(LocalAuthGuard)
  getInfo(@CurrentUser() user: User) {
    return this.loginService.information(user);
  }

  @Get()
  @UseGuards(LocalAuthGuard)
  findAll(@CurrentUser() user: User) {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
