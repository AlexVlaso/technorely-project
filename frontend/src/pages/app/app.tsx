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

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={<Navigate to={AppRoute.COMPANIES} />}
        />
        <Route path={AppRoute.SIGN_IN} element={<Auth />} />
        <Route path={AppRoute.SIGN_UP} element={<Auth />} />
        <Route path={AppRoute.COMPANIES} element={<Companies />} />
        <Route path={AppRoute.COMPANY_DETAILS} element={<CompanyDetails />} />
        <Route path={AppRoute.PROFILE} element={<Profile />} />
      </Routes>
    </Router>
  );
}

export { App };
