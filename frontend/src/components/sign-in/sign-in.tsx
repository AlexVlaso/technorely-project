import { Formik, Field, Form } from 'formik';
import styles from './styles.module.scss';
import { useCallback } from 'react';
import { type SignInValues } from '../../lib/types/sign-in.type';
import { SignInValidation } from '../../lib/validation/sign-in.validation';

const SignIn: React.FC = () => {
  const initialValues: SignInValues = {
    email: '',
    password: '',
  };

  const onSubmit = useCallback((values: SignInValues) => {
    console.log(values);
  }, []);
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { SignIn };
