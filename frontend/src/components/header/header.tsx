import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { UserMenu } from '../user-menu/user-menu';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faLandmark} />
        <div>Companies Manager</div>
      </div>
      <UserMenu />
    </header>
  );
};

export { Header };
