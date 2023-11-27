import { Formik, Field, Form } from 'formik';
import { useCallback } from 'react';
import { type SignInValues } from '../../lib/types/types';
import { SignInValidation } from '../../lib/validation/validation';
import { useAppDispatch } from '../../lib/hooks/hooks';
import { login } from '../../slices/auth/actions';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../lib/constants/route.constant';
import styles from '../../assets/styles/common-modules/form.module.scss';

const initialValues: SignInValues = {
  email: '',
  password: '',
};

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (values: SignInValues) => {
      dispatch(login(values));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignInValidation}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <label htmlFor="email" className={styles.label}>
              Email
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

            <label htmlFor="password" className={styles.label}>
              Password
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

            <button className={styles.btn} type="submit">
              Submit
            </button>

            <p className={styles.text}>
              Don`t have an account yet?{' '}
              <Link to={AppRoute.SIGN_UP} className={styles.link}>
                Sign Up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { SignIn };
