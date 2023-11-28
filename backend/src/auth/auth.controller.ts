import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import {
  LogoutResponse,
  RequestWithUser,
  RequestWithUserId,
  SignInResponse,
  UserCommonDetails,
} from 'src/libs/types/types';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserWithoutToken } from 'src/libs/types/types';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: CreateUserDto): Promise<UserCommonDetails> {
    return this.authService.singUp(body);
  }

  @Post('signin')
  @UseGuards(LocalAuthGuard)
  async signIn(@Request() req: RequestWithUser): Promise<SignInResponse> {
    return this.authService.signIn(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(
    @Request() req: RequestWithUserId,
  ): Promise<UserWithoutToken> {
    return this.authService.getProfile(req.user.id);
  }

  @Put('profile')
  @UseGuards(JwtAuthGuard)
  async updateProfile(
    @Body() body: UserWithoutToken,
  ): Promise<UserWithoutToken> {
    return this.authService.updateProfile(body);
  }

  @Get('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Request() req: RequestWithUserId): Promise<LogoutResponse> {
    return this.authService.logout(req.user.id);
  }
}
