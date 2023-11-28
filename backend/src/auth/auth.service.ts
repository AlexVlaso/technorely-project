import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/libs/helpers/hash.helper';
import { User } from 'src/user/entity/user.entity';
import { UsersService } from 'src/user/user.service';
import { JwtConstant } from './constants/constants';
import {
  JwtPayload,
  LogoutResponse,
  SignInResponse,
  UserCommonDetails,
  UserT,
  UserWithoutToken,
} from 'src/libs/types/types';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserT> {
    const user = await this.usersService.findByEmail(email);
    const confirmPassword = await comparePassword(password, user.password);

    if (user && confirmPassword) {
      return user;
    }
    return null;
  }

  async singUp(createUserDto: CreateUserDto): Promise<UserCommonDetails> {
    const user = await this.usersService.create(createUserDto);
    const { password, ...pureUser } = await this.updateUserToken(user);
    return pureUser;
  }

  async signIn(user: User): Promise<SignInResponse> {
    let accessToken = user.accessToken;
    if (!user.accessToken || !this.verifyToken(user.accessToken)) {
      const updatedUser = await this.updateUserToken(user);
      accessToken = updatedUser.accessToken;
    }
    return {
      access_token: accessToken,
    };
  }

  async getProfile(id: number): Promise<UserWithoutToken> {
    const { password, accessToken, ...pureUser } =
      await this.usersService.findById(id);
    return pureUser;
  }

  async updateProfile(dto: UserWithoutToken): Promise<UserWithoutToken> {
    const userFromDB = await this.usersService.findById(dto.id);
    const { password, accessToken, ...pureUser } =
      await this.usersService.update({ ...userFromDB, ...dto });
    return pureUser;
  }

  async logout(id: number): Promise<LogoutResponse> {
    const user = await this.usersService.findById(id);
    user.accessToken = null;
    await this.usersService.update(user);
    return {
      message: 'Successful logout',
    };
  }

  updateUserToken(user: UserT): Promise<UserT> {
    const accessToken = this.jwtService.sign({ id: user.id });
    user.accessToken = accessToken;
    return this.usersService.update(user);
  }

  async validateToken(token: string): Promise<boolean> {
    try {
      const payload: JwtPayload = this.jwtService.verify(token, {
        secret: JwtConstant.SECRET,
      });
      const user = await this.usersService.findById(payload.id);
      return user.accessToken === token;
    } catch (error) {
      try {
        const payload: JwtPayload = this.jwtService.verify(token, {
          secret: JwtConstant.SECRET,
          ignoreExpiration: true,
        });
        await this.logout(payload.id);
        return false;
      } catch (error) {
        return false;
      }
    }
  }

  verifyToken(token: string): boolean {
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
