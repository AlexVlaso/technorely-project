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
import { RequestWithUser, RequestWithUserId } from 'src/libs/types/types';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: CreateUserDto) {
    return this.authService.singUp(body);
  }

  @Post('signin')
  @UseGuards(LocalAuthGuard)
  async signIn(@Request() req: RequestWithUser) {
    return this.authService.signIn(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req: RequestWithUserId) {
    return this.authService.getProfile(req.user.id);
  }

  @Get('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Request() req: RequestWithUserId) {
    return this.authService.logout(req.user.id);
  }
}
