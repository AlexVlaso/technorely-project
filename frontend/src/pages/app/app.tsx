import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AppRoute } from '../../lib/constants/route.constant';
import { Auth } from '../auth/auth';
import { Companies } from '../companies/companies';
import { CompanyDetails } from '../company-details/company-details';
import { Profile } from '../profile/profile';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/hooks';
import { getProfile } from '../../slices/auth/actions';
import { PrivateRoute } from '../../components/private-route/private-route';
import { Header } from '../../components/header/header';
function App() {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('token');
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (token && !user) {
      dispatch(getProfile());
    }
  }, [dispatch, token, user]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={<Navigate to={AppRoute.SIGN_IN} />}
        />
        <Route path={AppRoute.SIGN_IN} element={<Auth />} />
        <Route path={AppRoute.SIGN_UP} element={<Auth />} />
        <Route
          path={AppRoute.COMPANIES}
          element={<PrivateRoute element={<Companies />} />}
        />
        <Route
          path={AppRoute.COMPANY_DETAILS}
          element={<PrivateRoute element={<CompanyDetails />} />}
        />
        <Route
          path={AppRoute.PROFILE}
          element={<PrivateRoute element={<Profile />} />}
        />
      </Routes>
    </Router>
  );
}

export { App };
