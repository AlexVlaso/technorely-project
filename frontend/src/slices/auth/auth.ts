import { actions } from './auth.slice';
import { login, getProfile } from './actions';

const allActions = {
  ...actions,
  login,
  getProfile,
};

export { allActions as actions };
export { reducer } from './auth.slice';
