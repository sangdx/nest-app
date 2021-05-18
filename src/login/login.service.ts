import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateLoginDto, LoginUser } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import {User} from './entities/login.entity';
// import { UserRepository } from './repository';
import {Md5} from "md5-typescript";
import * as jwt from 'jsonwebtoken';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private readonly userRP: Repository<User>,
  ) {}

  async create(createLoginDto: CreateLoginDto) : Promise<User> {
    const user = await this.userRP.findOne({ name: createLoginDto.name });
    if (user) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'User existed!'
        },
        HttpStatus.BAD_REQUEST
      );
    };
    const createdUser = await this.userRP.save({
      ...createLoginDto,
      password: Md5.init(createLoginDto.password)
    });
    return createdUser;
  }
  async login(user: LoginUser):Promise<any> {
    const userLogin = await this.userRP.findOne({
      name: user.name,
      password: Md5.init(user.password)
    });
    if (!userLogin) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'User existed!'
        },
        HttpStatus.BAD_REQUEST
      );
    };
    const token = jwt.sign({userLogin}, `${process.env.API_SECRET}`, { expiresIn: 60 * 60 * 24 * 365 });
    return token;
  }

  async information(user: User):Promise<User> {
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

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

 async remove(id: number) {
    return await this.userRP.delete({
      id: id
    });
  }

  async findUser(user: any): Promise<any> {
    let name = user.userLogin.name
    let rs =  await this.userRP.findOne({name : name});
    return rs
  }
}
