import { UserT } from './user.type';

type UserWithoutToken = Omit<UserT, 'password' | 'accessToken'>;

export { UserWithoutToken };
