import { useCallback } from 'react';
import styles from './styles.module.scss';

type Property = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactElement;
};

const Modal: React.FC<Property> = ({ children, isOpen, onClose }: Property) => {
  const handleContentClick: React.MouseEventHandler = useCallback((event) => {
    event.stopPropagation();
  }, []);

  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.container} onClick={onClose}>
      <div onClick={handleContentClick}>{children}</div>
    </div>
  );
};

export { Modal };
