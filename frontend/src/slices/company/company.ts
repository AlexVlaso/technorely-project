import { actions } from './company.slice';
import { getAllCompanies, getCompany } from './actions';

const allActions = {
  ...actions,
  getAllCompanies,
  getCompany,
};

export { allActions as actions };
export { reducer } from './company.slice';
