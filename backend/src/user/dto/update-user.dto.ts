import { IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

class UpdateUserDto extends CreateUserDto {
  @IsNotEmpty()
  id: number;

  @IsString()
  accessToken?: string;
}

export { UpdateUserDto };
