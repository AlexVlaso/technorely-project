import { AuthApi } from '../../../packages/auth/auth-api';
import { AppDispatch, RootState } from '../../../packages/store/store';

type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  extra: {
    authApi: AuthApi;
  };
};

export { type AsyncThunkConfig };
