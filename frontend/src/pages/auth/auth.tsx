import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../lib/constants/route.constant';
import { useCallback, useEffect } from 'react';
import { SignIn } from '../../components/sign-in/sign-in';
import { SignUp } from '../../components/sign-up/sign-up';
import { useAppSelector } from '../../lib/hooks/hooks';

const Auth: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate(AppRoute.COMPANIES);
    }
  }, [navigate, user]);

  const getScreen = useCallback((): React.ReactNode => {
    switch (location.pathname) {
      case AppRoute.SIGN_IN:
        return <SignIn />;
      case AppRoute.SIGN_UP:
        return <SignUp />;
    }
    return null;
  }, [location.pathname]);

  return <main>{getScreen()}</main>;
};

export { Auth };
