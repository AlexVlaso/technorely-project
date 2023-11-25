import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

class UpdateUserDto extends CreateUserDto {
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsOptional()
  accessToken?: string;
}

export { UpdateUserDto };
