import * as bcrypt from 'bcrypt';

const hashPassword = (password: string) => {
  const SALT_OR_ROUNDS = 10;
  return bcrypt.hash(password, SALT_OR_ROUNDS);
};

const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
export { hashPassword, comparePassword };
