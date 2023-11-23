import { CreateUserDto } from './create-user.dto';

type UpdateUserDto = CreateUserDto & { id: number };

export { UpdateUserDto };
