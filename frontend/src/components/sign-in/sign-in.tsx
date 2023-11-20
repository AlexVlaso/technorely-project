import { Formik, Field, Form } from 'formik';
import styles from './styles.module.scss';
import { useCallback } from 'react';
import { type SignInValues } from '../../lib/types/sign-in.type';

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
      <h1>Sign In</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
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

          <button className={styles.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export { SignIn };
