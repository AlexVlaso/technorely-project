import { UserCommonDetails } from '../user/user-without-password.type';

type JwtPayload = {
  id: number;
  iat: number;
  exp: number;
};

export { JwtPayload };
