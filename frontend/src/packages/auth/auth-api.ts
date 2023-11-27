import {
  LogoutResponse,
  SignInResponse,
  SignInValues,
  SignUpValues,
  UserCommonDetails,
  UserWithoutToken,
} from '../../lib/types/types';
import { HttpApi } from '../api/http-api';
import { AuthRoute } from './constant/auth-route.constat';

class AuthApi extends HttpApi {
  async signIn(payload: SignInValues): Promise<SignInResponse> {
    const response = await this.load<SignInResponse>(AuthRoute.SIGN_IN, {
      method: 'POST',
      hasAuth: false,
      payload: JSON.stringify(payload),
    });
    return response;
  }

  async signUp(payload: SignUpValues): Promise<UserCommonDetails> {
    const response = await this.load<UserCommonDetails>(AuthRoute.SIGN_UP, {
      method: 'POST',
      hasAuth: false,
      payload: JSON.stringify(payload),
    });
    return response;
  }

  async getProfile(): Promise<UserWithoutToken> {
    const response = await this.load<UserWithoutToken>(AuthRoute.PROFILE, {
      method: 'GET',
      hasAuth: true,
      payload: null,
    });
    return response;
  }

  async logout(): Promise<LogoutResponse> {
    const response = await this.load<LogoutResponse>(AuthRoute.LOGOUT, {
      method: 'GET',
      hasAuth: true,
      payload: null,
    });
    return response;
  }
}

export { AuthApi };