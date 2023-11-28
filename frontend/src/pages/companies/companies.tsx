import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CompaniesTable } from '../../components/companies-table/companies-table';
import styles from './styles.module.scss';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useState } from 'react';
import { Modal } from '../../components/modal/modal';
import { CompanyForm } from '../../components/company-form/company-form';
import { useAppDispatch } from '../../lib/hooks/hooks';
import { CompanyValues } from '../../lib/types/types';
import { createCompany } from '../../slices/company/actions';

const Companies: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }, []);

  const handleSubmit = useCallback(
    (values: CompanyValues) => {
      dispatch(createCompany(values));
      setIsModalOpen(false);
    },
    [dispatch],
  );

  return (
    <main className={styles.main}>
      <CompaniesTable />
      <button className={styles.add} onClick={handleModal}>
        Add Company <FontAwesomeIcon icon={faPlus} />
      </button>
      <Modal isOpen={isModalOpen} onClose={handleModal}>
        <CompanyForm
          onClose={handleModal}
          title="Add Company"
          onSubmit={handleSubmit}
        />
      </Modal>
    </main>
  );
};

export { Companies };
