import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CompaniesTable } from '../../components/companies-table/companies-table';
import { Header } from '../../components/header/header';
import styles from './styles.module.scss';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Companies: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <CompaniesTable />
        <button className={styles.add}>
          Add Company <FontAwesomeIcon icon={faPlus} />
        </button>
      </main>
    </div>
  );
};

export { Companies };
