import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/libs/helpers/hash.helper';
import { User } from 'src/user/entity/user.entity';
import { UsersService } from 'src/user/user.service';
import { JwtConstant } from './constants/constants';
import { JwtPayload } from 'src/libs/types/types';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

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

  async singUp(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return this.updateUserToken(user);
  }

  async signIn(user: User) {
    return user.accessToken && this.verifyToken(user.accessToken)
      ? user
      : this.updateUserToken(user);
  }

  getProfile(id: number) {
    return this.usersService.findById(id);
  }

  async logout(id: number) {
    const user = await this.usersService.findById(id);
    user.accessToken = null;
    await this.usersService.update(user);
  }

  updateUserToken(user: User) {
    const accessToken = this.jwtService.sign({ id: user.id });
    user.accessToken = accessToken;
    return this.usersService.update(user);
  }

  async validateToken(token: string) {
    try {
      const payload: JwtPayload = this.jwtService.verify(token, {
        secret: JwtConstant.SECRET,
      });
      const user = await this.usersService.findById(payload.id);
      return user.accessToken === token;
    } catch (error) {
      const payload: JwtPayload = this.jwtService.verify(token, {
        secret: JwtConstant.SECRET,
        ignoreExpiration: true,
      });
      await this.logout(payload.id);
      return false;
    }
  }

  verifyToken(token: string) {
    try {
      this.jwtService.verify(token, {
        secret: JwtConstant.SECRET,
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
