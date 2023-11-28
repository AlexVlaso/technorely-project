import { AuthApi } from '../../packages/auth/auth-api';
import { CompanyApi } from '../../packages/company/company-api';
import { AppDispatch, RootState } from '../../packages/store/store';

type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  extra: {
    authApi: AuthApi;
    companyApi: CompanyApi;
  };
};

export { type AsyncThunkConfig };
