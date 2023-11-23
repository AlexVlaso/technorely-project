import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  nickname: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  position: string;
}
