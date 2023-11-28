import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompanyT, CompanyValues } from '../../lib/types/types';
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

const updateCompany = createAsyncThunk<
  CompanyT,
  CompanyValues,
  AsyncThunkConfig
>('companies/update-company', async (payload, { extra }) => {
  const data = await extra.companyApi.updateCompany(payload);
  return data;
});

const createCompany = createAsyncThunk<
  CompanyT,
  CompanyValues,
  AsyncThunkConfig
>('companies/create-company', async (payload, { extra, dispatch }) => {
  const data = await extra.companyApi.createCompany(payload);
  await dispatch(getAllCompanies());
  return data;
});

const deleteCompany = createAsyncThunk<void, number, AsyncThunkConfig>(
  'companies/delete-company',
  async (payload, { extra, dispatch }) => {
    await extra.companyApi.deleteCompany(payload);
    await dispatch(getAllCompanies());
  },
);

export {
  getAllCompanies,
  getCompany,
  updateCompany,
  createCompany,
  deleteCompany,
};
