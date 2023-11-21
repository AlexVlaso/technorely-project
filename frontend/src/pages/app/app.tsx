import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../lib/constants/route.constant';
import { Auth } from '../auth/auth';
import { Companies } from '../companies/companies';
import { CompanyDetails } from '../company-details/company-details';
import { CompanyForm } from '../../components/company-form/company-form';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.ROOT} element={<CompanyForm />} />
        <Route path={AppRoute.SIGN_IN} element={<Auth />} />
        <Route path={AppRoute.SIGN_UP} element={<Auth />} />
        <Route path={AppRoute.COMPANIES} element={<Companies />} />
        <Route path={AppRoute.COMPANY_DETAILS} element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
}

export { App };
