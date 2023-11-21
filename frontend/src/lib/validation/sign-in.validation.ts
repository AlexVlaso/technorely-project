import * as Yup from 'yup';

const SignInValidation = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
});

export { SignInValidation };
