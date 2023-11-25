import {
  Body,
  Controller,
  Get,
  Post,
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

  @Get('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Request() req: RequestWithUserId): Promise<LogoutResponse> {
    return this.authService.logout(req.user.id);
  }
}
