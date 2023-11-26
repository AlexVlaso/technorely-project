import styles from './styles.module.scss';

const Spinner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>Loading...</div>
    </div>
  );
};

export { Spinner };
