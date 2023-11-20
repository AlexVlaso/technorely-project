import { Header } from '../../components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../lib/constants/route.constant';
import { Auth } from '../auth/auth';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Header />} />
        <Route path={AppRoute.SIGN_IN} element={<Auth />} />
        <Route path={AppRoute.SIGN_UP} element={<Auth />} />
      </Routes>
    </Router>
  );
}

export { App };
