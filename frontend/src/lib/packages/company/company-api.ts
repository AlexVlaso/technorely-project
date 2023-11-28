import { CompanyT, CompanyValues } from '../../types/types';
import { HttpApi } from '../api/http-api';
import { CompanyRoute } from './constant/company-route.constant';

class CompanyApi extends HttpApi {
  async getAllCompanies() {
    const response = await this.load<CompanyT[]>(CompanyRoute.ROOT, {
      hasAuth: true,
      method: 'GET',
      payload: null,
    });
    return response;
  }
  async getCompany(id: number) {
    const response = await this.load<CompanyT>(`${CompanyRoute.ROOT}/${id}`, {
      hasAuth: true,
      method: 'GET',
      payload: null,
    });
    return response;
  }

  async createCompany(payload: CompanyValues) {
    const response = await this.load<CompanyT>(CompanyRoute.ROOT, {
      hasAuth: true,
      method: 'POST',
      payload: JSON.stringify(payload),
    });
    return response;
  }

  async updateCompany(payload: CompanyValues) {
    const response = await this.load<CompanyT>(CompanyRoute.ROOT, {
      hasAuth: true,
      method: 'PUT',
      payload: JSON.stringify(payload),
    });
    return response;
  }

  async deleteCompany(id: number) {
    const response = await this.load(`${CompanyRoute.ROOT}/${id}`, {
      hasAuth: true,
      method: 'DELETE',
      payload: null,
    });
    return response;
  }
}

export { CompanyApi };
