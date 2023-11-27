import { actions } from './auth.slice';
import { login, getProfile, signUp, logout } from './actions';

const allActions = {
  ...actions,
  login,
  signUp,
  getProfile,
  logout,
};

export { allActions as actions };
export { reducer } from './auth.slice';
