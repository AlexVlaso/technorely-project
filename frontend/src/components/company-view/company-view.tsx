import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { CompanyForm } from '../company-form/company-form';
import { Modal } from '../modal/modal';
import { useCallback, useState } from 'react';

const CompanyView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Company:</span>Intelias
      </div>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Address:</span>Kharkiv st
        Sumskaya 43
      </div>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Service of activity:</span>Car
        washing
      </div>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Number of employees:</span>34
      </div>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Description:</span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
        perferendis sed voluptatibus doloribus eligendi laboriosam tenetur culpa
        qui quam recusandae odit accusamus iusto a unde itaque eos aliquam!
        Expedita, iusto!
      </div>
      <div className={styles.category}>
        <span className={styles.categoryTitle}>Type:</span>Private business
      </div>
      <button className={styles.edit} onClick={handleModal}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <Modal isOpen={isModalOpen} onClose={handleModal}>
        <CompanyForm onClose={handleModal} title="Edit Company" />
      </Modal>
    </div>
  );
};

export { CompanyView };
