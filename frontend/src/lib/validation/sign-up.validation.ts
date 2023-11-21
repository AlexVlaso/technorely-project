import * as Yup from 'yup';

const SignUpValidation = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
  phone: Yup.string().required('Phone is Required'),
  lastName: Yup.string().required('Last Name is Required'),
  firstName: Yup.string().required('First Name is Required'),
  nickname: Yup.string().required('Nickname is Required'),
  description: Yup.string().required('Description is Required'),
  position: Yup.string().required('Position is Required'),
});

export { SignUpValidation };
