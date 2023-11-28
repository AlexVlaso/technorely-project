import { SerializedError, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { UserWithoutToken, ValueOf } from '../../lib/types/types';
import { getProfile, login, logout, signUp, updateProfile } from './actions';
import { DataStatus } from '../../lib/enum/data-status.enum';

type State = {
  user: UserWithoutToken | null;
  dataStatus: ValueOf<typeof DataStatus>;
  error: SerializedError | null;
};

const initialState: State = {
  user: null,
  dataStatus: DataStatus.IDLE,
  error: null,
};

const { actions, name, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state) => {
        state.dataStatus = DataStatus.FULFILLED;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.dataStatus = DataStatus.FULFILLED;
        state.user = null;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          getProfile.fulfilled,
          signUp.fulfilled,
          updateProfile.fulfilled,
        ),
        (state, actions) => {
          state.user = actions.payload;
          state.dataStatus = DataStatus.FULFILLED;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          login.pending,
          getProfile.pending,
          signUp.pending,
          logout.pending,
          updateProfile.pending,
        ),
        (state) => {
          state.dataStatus = DataStatus.PENDING;
        },
      )
      .addMatcher(
        isAnyOf(
          login.rejected,
          getProfile.rejected,
          signUp.rejected,
          logout.rejected,
          updateProfile.rejected,
        ),
        (state, actions) => {
          state.dataStatus = DataStatus.REJECTED;
          state.error = actions.error;
        },
      );
  },
});

export { actions, name, reducer };
