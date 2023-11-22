import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useState } from 'react';
import { Modal } from '../modal/modal';
import { SignUp } from '../sign-up/sign-up';

const ProfileView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profile</h1>
      <div className={styles.param}>
        <span className={styles.paramTitle}>First Name:</span>Alex
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Last Name:</span>Vlasov
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Nickname:</span>sanyavlaso@gmail.com
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Email:</span>sanyavlaso@gmail.com
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Phone:</span>+380999478944
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Position:</span>dev
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Description:</span>Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Sapiente, sed. Voluptate sunt
        maiores voluptatum delectus dolor necessitatibus deserunt rerum placeat
        ratione rem! Ipsum beatae exercitationem rem, quis natus aliquid
        corporis.
      </div>
      <button className={styles.edit} onClick={handleModal}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <Modal isOpen={isModalOpen} onClose={handleModal}>
        <SignUp title="Edit Profile" onClose={handleModal} />
      </Modal>
    </div>
  );
};

// email и password, phone number, last name, first name, nickname, description, position.

export { ProfileView };
