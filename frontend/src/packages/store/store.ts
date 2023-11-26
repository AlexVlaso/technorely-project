import { configureStore } from '@reduxjs/toolkit';
import { reducer as authReducer } from '../../slices/auth/auth.slice';
import { authApi } from '../auth/auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: { authApi } } }),
});
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
