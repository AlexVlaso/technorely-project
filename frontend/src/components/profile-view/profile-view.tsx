import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useState } from 'react';
import { Modal } from '../modal/modal';
import { SignUp } from '../sign-up/sign-up';
import { useAppSelector } from '../../lib/hooks/hooks';

const ProfileView = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }, []);

  if (!user) {
    return null;
  }

  const { firstName, lastName, nickname, email, phone, position, description } =
    user;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profile</h1>
      <div className={styles.param}>
        <span className={styles.paramTitle}>First Name:</span>
        {firstName}
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Last Name:</span>
        {lastName}
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Nickname:</span>
        {nickname}
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Email:</span>
        {email}
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Phone:</span>
        {phone}
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Position:</span>
        {position}
      </div>
      <div className={styles.param}>
        <span className={styles.paramTitle}>Description:</span>
        {description}
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

export { ProfileView };
