import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignInValues, UserWithoutToken } from '../../lib/types/types';
import { AsyncThunkConfig } from '../../lib/types/types';

const login = createAsyncThunk<void, SignInValues, AsyncThunkConfig>(
  'auth/login',
  async (payload, { extra, dispatch }) => {
    const data = await extra.authApi.signIn(payload);
    localStorage.setItem('token', data.access_token);
    await dispatch(getProfile());
  },
);

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

export { login, getProfile };
