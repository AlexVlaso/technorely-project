import { useNavigate } from 'react-router-dom';
import { CompanyView } from '../../components/company-view/company-view';
import { Header } from '../../components/header/header';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CompanyDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <main>
        <CompanyView />
        <button
          className={styles.back}
          onClick={() => {
            navigate(-1);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
      </main>
    </div>
  );
};

export { CompanyDetails };
