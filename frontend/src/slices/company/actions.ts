import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompanyT } from '../../lib/types/types';
import { AsyncThunkConfig } from '../../lib/types/types';

const getAllCompanies = createAsyncThunk<
  CompanyT[],
  undefined,
  AsyncThunkConfig
>('companies/get-all-companies', async (_, { extra }) => {
  const data = await extra.companyApi.getAllCompanies();
  return data;
});

const getCompany = createAsyncThunk<CompanyT, number, AsyncThunkConfig>(
  'companies/get-company',
  async (payload, { extra }) => {
    const data = await extra.companyApi.getCompany(payload);
    return data;
  },
);

export { getAllCompanies, getCompany };
