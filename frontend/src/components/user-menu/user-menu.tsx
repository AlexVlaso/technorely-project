import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../lib/constants/route.constant';
import { useCallback } from 'react';
import { useAppDispatch } from '../../lib/hooks/hooks';
import { logout } from '../../slices/auth/actions';

const UserMenu: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <ul className={styles.content}>
        <li className={styles.contentItem}>
          <Link className={styles.btn} to={AppRoute.PROFILE}>
            <FontAwesomeIcon icon={faAddressCard} />
            Profile
          </Link>
        </li>
        <li className={styles.contentItem}>
          <button className={styles.btn} onClick={handleLogout}>
            <FontAwesomeIcon icon={faDoorOpen} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export { UserMenu };
