import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/libs/helpers/hash.helper';
import { User } from 'src/user/entity/user.entity';
import { UsersService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    const confirmPassword = await comparePassword(password, user.password);

    if (user && confirmPassword) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const { password, companies, ...pureUser } = user;
    return {
      access_token: this.jwtService.sign(pureUser),
    };
  }
}
