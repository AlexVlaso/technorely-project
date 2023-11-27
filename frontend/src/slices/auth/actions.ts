import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  SignInValues,
  SignUpValues,
  UserWithoutToken,
} from '../../lib/types/types';
import { AsyncThunkConfig } from '../../lib/types/types';

const login = createAsyncThunk<void, SignInValues, AsyncThunkConfig>(
  'auth/login',
  async (payload, { extra, dispatch }) => {
    const data = await extra.authApi.signIn(payload);
    localStorage.setItem('token', data.access_token);
    await dispatch(getProfile());
  },
);

const signUp = createAsyncThunk<
  UserWithoutToken,
  SignUpValues,
  AsyncThunkConfig
>('auth/sign-up', async (payload, { extra }) => {
  const { accessToken, ...user } = await extra.authApi.signUp(payload);
  localStorage.setItem('token', accessToken);
  return user;
});

const getProfile = createAsyncThunk<
  UserWithoutToken,
  undefined,
  AsyncThunkConfig
>('auth/get-profile', async (_, { extra }) => {
  try {
    return await extra.authApi.getProfile();
  } catch (error) {
    localStorage.removeItem('token');
    throw error;
  }
});

const logout = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'auth/logout',
  async (_, { extra }) => {
    const { message } = await extra.authApi.logout();
    if (message) {
      localStorage.removeItem('token');
    }
  },
);

export { login, getProfile, signUp, logout };
