import { CompanyApi } from './company-api';

const companyApi = new CompanyApi(import.meta.env.VITE_API_SERVER_URL);

export { companyApi };
