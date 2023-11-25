import { UserCommonDetails } from '../user/user-common-depails.type';

type JwtPayload = {
  id: number;
  iat: number;
  exp: number;
};

export { JwtPayload };
