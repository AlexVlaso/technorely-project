import { configureStore } from '@reduxjs/toolkit';
import { reducer as authReducer } from '../../slices/auth/auth';
import { reducer as companiesReducer } from '../../slices/company/company';
import { authApi } from '../auth/auth';
import { companyApi } from '../company/company';

const store = configureStore({
  reducer: {
    auth: authReducer,
    companies: companiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: { authApi, companyApi } } }),
});
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
