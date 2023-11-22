import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { UserMenu } from '../user-menu/user-menu';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../lib/constants/route.constant';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Link className={styles.logo} to={AppRoute.ROOT}>
        <FontAwesomeIcon icon={faLandmark} />
        <div>Companies Manager</div>
      </Link>
      <UserMenu />
    </header>
  );
};

export { Header };
