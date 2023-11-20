import { Formik, Field, Form } from 'formik';
import { useCallback } from 'react';
import { SignUpValues } from '../../lib/types/sign-up.type';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

const SignUp: React.FC = () => {
  const initialValues: SignUpValues = {
    email: '',
    password: '',
    phone: '+380',
    lastName: '',
    firstName: '',
    nickname: '',
    description: '',
    position: '',
  };

  const onSubmit = useCallback((values: SignUpValues) => {
    console.log(values);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={styles.form}>
          <div className={styles.fieldWrapper}>
            <label htmlFor="firstName" className={styles.label}>
              First Name:
            </label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="first name"
              className={styles.field}
            />
          </div>
          <div className={styles.fieldWrapper}>
            <label htmlFor="lastName" className={styles.label}>
              Last Name:
            </label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="last name"
              className={styles.field}
            />
          </div>
          <div className={styles.fieldWrapper}>
            <label htmlFor="nickname" className={styles.label}>
              Nickname:
            </label>
            <Field
              id="nickname"
              name="nickname"
              placeholder="nickname"
              className={styles.field}
            />
          </div>
          <div className={styles.fieldWrapper}>
            <label htmlFor="phone" className={styles.label}>
              Phone:
            </label>
            <Field
              id="phone"
              name="phone"
              placeholder="phone"
              className={styles.field}
            />
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
          </div>
          <div className={styles.fieldWrapper}>
            <label htmlFor="description" className={styles.label}>
              Description:
            </label>
            <Field
              id="description"
              name="description"
              placeholder="description"
              className={clsx([styles.field, styles.textarea])}
              as="textarea"
            />
          </div>

          <div className={styles.fieldWrapper}>
            <label htmlFor="position" className={styles.label}>
              Position:
            </label>
            <Field
              id="position"
              name="position"
              placeholder="position"
              className={styles.field}
            />
          </div>

          <button className={styles.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export { SignUp };
