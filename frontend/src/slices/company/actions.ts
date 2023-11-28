import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompanyT, CompanyValues } from '../../lib/types/types';
import { AsyncThunkConfig } from '../../lib/types/types';
import { getErrorNotification } from '../../lib/helpers/get-error-notification.helper';
import { ErrorMessage } from '../../lib/constants/error-message.constant';

const getAllCompanies = createAsyncThunk<
  CompanyT[],
  undefined,
  AsyncThunkConfig
>('companies/get-all-companies', async (_, { extra, rejectWithValue }) => {
  try {
    const company = await extra.companyApi.getAllCompanies();
    return company;
  } catch (error) {
    const message = getErrorNotification(error, ErrorMessage.GET_ALL_COMPANIES);
    return rejectWithValue(message);
  }
});

const getCompany = createAsyncThunk<CompanyT, number, AsyncThunkConfig>(
  'companies/get-company',
  async (payload, { extra, rejectWithValue }) => {
    try {
      const company = await extra.companyApi.getCompany(payload);
      return company;
    } catch (error) {
      const message = getErrorNotification(error, ErrorMessage.GET_COMPANY);
      return rejectWithValue(message);
    }
  },
);

const updateCompany = createAsyncThunk<
  CompanyT,
  CompanyValues,
  AsyncThunkConfig
>('companies/update-company', async (payload, { extra, rejectWithValue }) => {
  try {
    const company = await extra.companyApi.updateCompany(payload);
    return company;
  } catch (error) {
    const message = getErrorNotification(error, ErrorMessage.UPDATE_COMPANY);
    return rejectWithValue(message);
  }
});

const createCompany = createAsyncThunk<
  CompanyT,
  CompanyValues,
  AsyncThunkConfig
>(
  'companies/create-company',
  async (payload, { extra, dispatch, rejectWithValue }) => {
    try {
      const company = await extra.companyApi.createCompany(payload);
      await dispatch(getAllCompanies());
      return company;
    } catch (error) {
      const message = getErrorNotification(error, ErrorMessage.CREATE_COMPANY);
      return rejectWithValue(message);
    }
  },
);

const deleteCompany = createAsyncThunk<void, number, AsyncThunkConfig>(
  'companies/delete-company',
  async (payload, { extra, dispatch }) => {
    try {
      await extra.companyApi.deleteCompany(payload);
      await dispatch(getAllCompanies());
    } catch (error) {
      getErrorNotification(error, ErrorMessage.DELETE_COMPANY);
    }
  },
);

export {
  getAllCompanies,
  getCompany,
  updateCompany,
  createCompany,
  deleteCompany,
};
