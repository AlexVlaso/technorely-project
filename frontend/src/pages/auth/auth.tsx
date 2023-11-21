import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../lib/constants/route.constant';
import { useCallback } from 'react';
import { SignIn } from '../../components/sign-in/sign-in';
import { Header } from '../../components/header/header';
import { SignUp } from '../../components/sign-up/sign-up';

const Auth: React.FC = () => {
  const location = useLocation();

  const getScreen = useCallback((): React.ReactNode => {
    switch (location.pathname) {
      case AppRoute.SIGN_IN:
        return <SignIn />;
      case AppRoute.SIGN_UP:
        return <SignUp />;
    }
    return null;
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <main>{getScreen()}</main>
    </div>
  );
};

export { Auth };
