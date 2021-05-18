import {IsNotEmpty} from 'class-validator';

export class CreateLoginDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  password: string;
}

export class LoginUser {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  password: string;
}
