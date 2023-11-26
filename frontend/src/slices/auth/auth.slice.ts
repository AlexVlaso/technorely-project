import { SerializedError, createSlice, isAllOf } from '@reduxjs/toolkit';
import { UserWithoutToken, ValueOf } from '../../lib/types/types';
import { getProfile, login } from './actions';
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
      .addCase(getProfile.fulfilled, (state, actions) => {
        state.user = actions.payload;
        state.dataStatus = DataStatus.FULFILLED;
      })
      .addCase(login.fulfilled, (state) => {
        state.dataStatus = DataStatus.FULFILLED;
      })
      .addMatcher(isAllOf(login.pending, getProfile.pending), (state) => {
        state.dataStatus = DataStatus.PENDING;
      })
      .addMatcher(
        isAllOf(login.rejected, getProfile.rejected),
        (state, actions) => {
          state.dataStatus = DataStatus.REJECTED;
          state.error = actions.error;
        },
      );
  },
});

export { actions, name, reducer };
