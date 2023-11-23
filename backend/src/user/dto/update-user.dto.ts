import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

class UpdateUserDto extends CreateUserDto {
  @IsNotEmpty()
  id: number;
}

export { UpdateUserDto };
