import { toast } from 'react-toastify';

const getErrorNotification = (error: unknown, defaultMessage: string) => {
  let message = defaultMessage;
  if (error instanceof Error) {
    message = error.message;
  }
  toast.error(message);
  return message;
};

export { getErrorNotification };
