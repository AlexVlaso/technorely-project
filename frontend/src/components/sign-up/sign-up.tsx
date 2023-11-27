import { Formik, Field, Form } from 'formik';
import { useCallback } from 'react';
import { type SignUpValues } from '../../lib/types/types';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { SignUpValidation } from '../../lib/validation/validation';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch } from '../../lib/hooks/hooks';
import { signUp } from '../../slices/auth/actions';
import { AppRoute } from '../../lib/constants/route.constant';
import { Link } from 'react-router-dom';

type Property = {
  title?: string;
  onClose?: () => void;
};

const initialValues: SignUpValues = {
  email: '',
  password: '',
  phone: '',
  lastName: '',
  firstName: '',
  nickname: '',
  description: '',
  position: '',
};

const SignUp: React.FC<Property> = ({ title = 'Sign Up', onClose }) => {
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (values: SignUpValues) => {
      dispatch(signUp(values));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      {onClose && (
        <button className={styles.close} onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignUpValidation}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.fieldWrapper}>
              <label htmlFor="firstName" className={styles.label}>
                First Name:
              </label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className={styles.field}
              />
              {errors.firstName && touched.firstName && (
                <div className={styles.error}>{errors.firstName}</div>
              )}
            </div>
            <div className={styles.fieldWrapper}>
              <label htmlFor="lastName" className={styles.label}>
                Last Name:
              </label>
              <Field
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className={styles.field}
              />
              {errors.lastName && touched.lastName && (
                <div className={styles.error}>{errors.lastName}</div>
              )}
            </div>
            <div className={styles.fieldWrapper}>
              <label htmlFor="nickname" className={styles.label}>
                Nickname:
              </label>
              <Field
                id="nickname"
                name="nickname"
                placeholder="Nickname"
                className={styles.field}
              />
              {errors.nickname && touched.nickname && (
                <div className={styles.error}>{errors.nickname}</div>
              )}
            </div>
            <div className={styles.fieldWrapper}>
              <label htmlFor="phone" className={styles.label}>
                Phone:
              </label>
              <Field
                id="phone"
                name="phone"
                placeholder="+38099-999-9999"
                className={styles.field}
              />
              {errors.phone && touched.phone && (
                <div className={styles.error}>{errors.phone}</div>
              )}
            </div>
            <div className={styles.fieldWrapper}>
              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <Field
                id="email"
                name="email"
                placeholder="example@gmail.com"
                type="email"
                className={styles.field}
              />
              {errors.email && touched.email && (
                <div className={styles.error}>{errors.email}</div>
              )}
            </div>
            <div className={styles.fieldWrapper}>
              <label htmlFor="password" className={styles.label}>
                Password:
              </label>
              <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
                autoComplete="on"
                className={styles.field}
              />
              {errors.password && touched.password && (
                <div className={styles.error}>{errors.password}</div>
              )}
            </div>
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
              {errors.description && touched.description && (
                <div className={styles.error}>{errors.description}</div>
              )}
            </div>

            <div className={styles.fieldWrapper}>
              <label htmlFor="position" className={styles.label}>
                Position:
              </label>
              <Field
                id="position"
                name="position"
                placeholder="Position"
                className={styles.field}
              />
              {errors.position && touched.position && (
                <div className={styles.error}>{errors.position}</div>
              )}
            </div>

            <button className={styles.btn} type="submit">
              Submit
            </button>

            <p className={styles.text}>
              Already have an account? Go to{' '}
              <Link to={AppRoute.SIGN_IN} className={styles.link}>
                Sign In
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { SignUp };
