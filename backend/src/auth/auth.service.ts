import { Injectable } from '@nestjs/common';
import { comparePassword } from 'src/libs/helpers/hash.helper';
import { UsersService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    const confirmPassword = await comparePassword(password, user.password);

    if (user && confirmPassword) {
      return user;
    }
    return null;
  }
}
