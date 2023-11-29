import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  SignInValues,
  SignUpValues,
  UserValues,
  UserWithoutToken,
} from '../../lib/types/types';
import { AsyncThunkConfig } from '../../lib/types/types';
import { ErrorMessage } from '../../lib/constants/error-message.constant';
import { getErrorNotification } from '../../lib/helpers/get-error-notification.helper';
import { StorageElement } from '../../lib/constants/storage-element.constant';

const login = createAsyncThunk<void, SignInValues, AsyncThunkConfig>(
  'auth/login',
  async (payload, { extra, dispatch }) => {
    try {
      const data = await extra.authApi.signIn(payload);

      localStorage.setItem(StorageElement.TOKEN, data.access_token);
      await dispatch(getProfile());
    } catch (error) {
      getErrorNotification(error, ErrorMessage.LOGIN);
    }
  },
);

const signUp = createAsyncThunk<
  UserWithoutToken,
  SignUpValues,
  AsyncThunkConfig
>('auth/sign-up', async (payload, { extra, rejectWithValue }) => {
  try {
    const { accessToken, ...user } = await extra.authApi.signUp(payload);
    localStorage.setItem(StorageElement.TOKEN, accessToken);
    return user;
  } catch (error) {
    const message = getErrorNotification(error, ErrorMessage.SIGN_UP);
    return rejectWithValue(message);
  }
});

const getProfile = createAsyncThunk<
  UserWithoutToken,
  undefined,
  AsyncThunkConfig
>('auth/get-profile', async (_, { extra, rejectWithValue }) => {
  try {
    const user = await extra.authApi.getProfile();
    return user;
  } catch (error) {
    localStorage.removeItem(StorageElement.TOKEN);
    const message = getErrorNotification(error, ErrorMessage.GET_PROFILE);
    return rejectWithValue(message);
  }
});

const updateProfile = createAsyncThunk<
  UserWithoutToken,
  UserValues,
  AsyncThunkConfig
>('auth/update-profile', async (payload, { extra, rejectWithValue }) => {
  try {
    const user = await extra.authApi.updateProfile(payload);
    return user;
  } catch (error) {
    const message = getErrorNotification(error, ErrorMessage.UPDATE_PROFILE);
    return rejectWithValue(message);
  }
});

const logout = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'auth/logout',
  async (_, { extra }) => {
    try {
      const { message } = await extra.authApi.logout();
      if (message) {
        localStorage.removeItem(StorageElement.TOKEN);
      }
    } catch (error) {
      getErrorNotification(error, ErrorMessage.LOGOUT);
    }
  },
);

export { login, getProfile, updateProfile, signUp, logout };
