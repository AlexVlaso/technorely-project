import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className={styles.back}
      onClick={() => {
        navigate(-1);
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      Back
    </button>
  );
};

export { BackButton };
