import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { CompanyForm } from '../company-form/company-form';
import { Modal } from '../modal/modal';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/hooks';
import { getCompany } from '../../slices/company/actions';
import { useParams } from 'react-router-dom';

const CompanyView: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const company = useAppSelector((state) => state.companies.selectedCompany);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getCompany(+id));
    }
  }, [dispatch, id]);

  if (!company) {
    return null;
  }

  const {
    name,
    address,
    serviceOfActivity,
    numberOfEmployees,
    description,
    type,
  } = company;

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Company:</span>
        {name}
      </div>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Address:</span>
        {address}
      </div>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Service of activity:</span>
        {serviceOfActivity}
      </div>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Number of employees:</span>
        {numberOfEmployees}
      </div>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Type:</span>
        {type}
      </div>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Description:</span>
        {description}
      </div>
      <button className={styles.edit} onClick={handleModal}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <Modal isOpen={isModalOpen} onClose={handleModal}>
        <CompanyForm
          onClose={handleModal}
          title="Edit Company"
          initialValues={company}
        />
      </Modal>
    </div>
  );
};

export { CompanyView };
