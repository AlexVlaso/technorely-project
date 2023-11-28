import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CompanyForm } from '../company-form/company-form';
import { Modal } from '../modal/modal';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/hooks';
import {
  deleteCompany,
  getCompany,
  updateCompany,
} from '../../slices/company/actions';
import { useNavigate, useParams } from 'react-router-dom';
import { CompanyValues } from '../../lib/types/types';
import { AppRoute } from '../../lib/constants/route.constant';

const CompanyView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const company = useAppSelector((state) => state.companies.selectedCompany);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }, []);

  const handleDelete = useCallback(() => {
    if (company) {
      dispatch(deleteCompany(company.id));
      navigate(AppRoute.COMPANIES);
    }
  }, [company, dispatch, navigate]);

  const handleSubmit = useCallback(
    (values: CompanyValues) => {
      dispatch(updateCompany(values));
      setIsModalOpen(false);
    },
    [dispatch],
  );

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
      <div className={styles.editWrapper}>
        <button className={styles.edit} onClick={handleModal}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button className={styles.edit} onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModal}>
        <CompanyForm
          onClose={handleModal}
          title="Edit Company"
          initialValues={company}
          onSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
};

export { CompanyView };
