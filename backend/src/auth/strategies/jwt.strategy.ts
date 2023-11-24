import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtConstant } from '../constants/constants';
import { JwtPayload, UserCommonDetails } from 'src/libs/types/types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JwtConstant.SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<UserCommonDetails> {
    const { iat, exp, ...user } = payload;
    return user;
  }
}
