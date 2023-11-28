import { actions } from './company.slice';
import {
  getAllCompanies,
  getCompany,
  updateCompany,
  createCompany,
  deleteCompany,
} from './actions';

const allActions = {
  ...actions,
  getAllCompanies,
  getCompany,
  updateCompany,
  createCompany,
  deleteCompany,
};

export { allActions as actions };
export { reducer } from './company.slice';
