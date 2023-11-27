import { Formik, Field, Form } from 'formik';
import { useCallback } from 'react';
import { CompanyValues } from '../../lib/types/types';
import { CompanyValidation } from '../../lib/validation/validation';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const initial: CompanyValues = {
  name: '',
  address: '',
  serviceOfActivity: '',
  numberOfEmployees: 0,
  description: '',
  type: '',
};

type Property = {
  title?: string;
  onClose: () => void;
  initialValues?: CompanyValues;
};

const CompanyForm: React.FC<Property> = ({
  onClose,
  title = 'Company',
  initialValues = initial,
}) => {
  const onSubmit = useCallback((values: CompanyValues) => {
    console.log(values);
  }, []);

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <h1>{title}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={CompanyValidation}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.fieldWrapper}>
              <label htmlFor="name" className={styles.label}>
                Name:
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Name"
                className={styles.field}
              />
            </div>
            {errors.name && touched.name && (
              <div className={styles.error}>{errors.name}</div>
            )}
            <div className={styles.fieldWrapper}>
              <label htmlFor="address" className={styles.label}>
                Address:
              </label>
              <Field
                id="address"
                name="address"
                placeholder="Address"
                className={styles.field}
              />
            </div>
            {errors.address && touched.address && (
              <div className={styles.error}>{errors.address}</div>
            )}
            <div className={styles.fieldWrapper}>
              <label htmlFor="serviceOfActivity" className={styles.label}>
                Service of Activity:
              </label>
              <Field
                id="serviceOfActivity"
                name="serviceOfActivity"
                placeholder="Service of Activity"
                className={styles.field}
              />
            </div>
            {errors.serviceOfActivity && touched.serviceOfActivity && (
              <div className={styles.error}>{errors.serviceOfActivity}</div>
            )}
            <div className={styles.fieldWrapper}>
              <label htmlFor="numberOfEmployees" className={styles.label}>
                Number of Employees:
              </label>
              <Field
                id="numberOfEmployees"
                name="numberOfEmployees"
                placeholder="Number of Employees"
                className={styles.field}
              />
            </div>
            {errors.numberOfEmployees && touched.numberOfEmployees && (
              <div className={styles.error}>{errors.numberOfEmployees}</div>
            )}
            <div className={styles.fieldWrapper}>
              <label htmlFor="type" className={styles.label}>
                Type:
              </label>
              <Field
                id="type"
                name="type"
                placeholder="Type"
                className={styles.field}
              />
            </div>
            {errors.type && touched.type && (
              <div className={styles.error}>{errors.type}</div>
            )}
            <div className={styles.fieldWrapper}>
              <label htmlFor="description" className={styles.label}>
                Description:
              </label>
              <Field
                id="description"
                name="description"
                placeholder="Description"
                className={clsx([styles.field, styles.textarea])}
                as="textarea"
              />
            </div>
            {errors.description && touched.description && (
              <div className={styles.error}>{errors.description}</div>
            )}

            <button className={styles.btn} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { CompanyForm };
