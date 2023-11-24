import { User } from 'src/user/entity/user.entity';

type UserCommonDetails = Omit<User, 'password' | 'companies'>;

export { UserCommonDetails };
