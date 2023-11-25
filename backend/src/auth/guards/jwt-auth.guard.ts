import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private authService: AuthService) {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    if (!authorization || authorization.trim() === '') {
      throw new UnauthorizedException('Please provide token');
    }
    const authToken = authorization.replace(/bearer/gim, '').trim();
    const customValidation = await this.authService.validateToken(authToken);
    const defaultValidation = await super.canActivate(context);

    return defaultValidation && customValidation;
  }
}
