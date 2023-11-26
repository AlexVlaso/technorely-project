import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CompaniesTable } from '../../components/companies-table/companies-table';
import styles from './styles.module.scss';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useState } from 'react';
import { Modal } from '../../components/modal/modal';
import { CompanyForm } from '../../components/company-form/company-form';

const Companies: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }, []);

  return (
    <main>
      <CompaniesTable />
      <button className={styles.add} onClick={handleModal}>
        Add Company <FontAwesomeIcon icon={faPlus} />
      </button>
      <Modal isOpen={isModalOpen} onClose={handleModal}>
        <CompanyForm onClose={handleModal} title="Add Company" />
      </Modal>
    </main>
  );
};

export { Companies };
