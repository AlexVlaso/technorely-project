import { actions } from './auth.slice';
import { login, getProfile, signUp, logout, updateProfile } from './actions';

const allActions = {
  ...actions,
  login,
  signUp,
  getProfile,
  logout,
  updateProfile,
};

export { allActions as actions };
export { reducer } from './auth.slice';
