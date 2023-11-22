import { BackButton } from '../../components/back-button/back-button';
import { Header } from '../../components/header/header';
import { ProfileView } from '../../components/profile-view/profile-view';

const Profile = () => {
  return (
    <div>
      <Header />
      <main>
        <BackButton />
        <ProfileView />
      </main>
    </div>
  );
};

export { Profile };
