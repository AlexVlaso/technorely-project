import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen';

const UserMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <ul className={styles.content}>
        <li className={styles.contentItem}>
          <button className={styles.btn}>
            <FontAwesomeIcon icon={faAddressCard} />
            Profile
          </button>
        </li>
        <li className={styles.contentItem}>
          <button className={styles.btn}>
            <FontAwesomeIcon icon={faDoorOpen} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export { UserMenu };
