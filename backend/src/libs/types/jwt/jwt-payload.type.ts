import { UserCommonDetails } from '../user/user-without-password.type';

type JwtPayload = UserCommonDetails & {
  'iat': number;
  'exp': number;
};

export { JwtPayload };
