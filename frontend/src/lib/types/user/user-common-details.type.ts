import { UserT } from './user.type';

type UserCommonDetails = Omit<UserT, 'password'>;

export { type UserCommonDetails };
