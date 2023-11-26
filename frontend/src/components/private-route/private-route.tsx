import { ReactElement } from 'react';
import { useAppSelector } from '../../lib/hooks/hooks';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../lib/constants/route.constant';
import { Spinner } from '../spinner/spinner';

interface PrivateRouteProps {
  element: ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useAppSelector((state) => state.auth);
  const userToken = localStorage.getItem('token');

  if (userToken && !user) return <Spinner />;

  if (user) return element;

  return <Navigate to={AppRoute.SIGN_IN} />;
};

export { PrivateRoute };
