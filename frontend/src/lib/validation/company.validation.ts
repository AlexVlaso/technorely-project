import * as Yup from 'yup';

const CompanyValidation = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  address: Yup.string().required('Address is Required'),
  serviceOfActivity: Yup.string().required('Service of Activity is Required'),
  numberOfEmployees: Yup.number()
    .typeError('Number of Employees should be a number')
    .required('Number of Employees is Required'),
  description: Yup.string().required('Description is Required'),
  type: Yup.string().required('Type is Required'),
});

export { CompanyValidation };
