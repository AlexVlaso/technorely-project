import { SignUpValues } from './sign-up-form.type';

type UserValues = Omit<SignUpValues, 'password'>;

export { type UserValues };
