import { SerializedError, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { CompanyT, ValueOf } from '../../lib/types/types';
import { DataStatus } from '../../lib/enum/data-status.enum';
import {
  createCompany,
  deleteCompany,
  getAllCompanies,
  getCompany,
  updateCompany,
} from './actions';

type State = {
  companies: CompanyT[];
  selectedCompany: CompanyT | null;
  dataStatus: ValueOf<typeof DataStatus>;
  error: SerializedError | null;
};

const initialState: State = {
  companies: [],
  selectedCompany: null,
  dataStatus: DataStatus.IDLE,
  error: null,
};

const { actions, name, reducer } = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCompanies.fulfilled, (state, actions) => {
        state.companies = actions.payload;
        state.dataStatus = DataStatus.FULFILLED;
      })
      .addCase(getCompany.fulfilled, (state, actions) => {
        state.selectedCompany = actions.payload;
        state.dataStatus = DataStatus.FULFILLED;
      })
      .addCase(createCompany.fulfilled, (state) => {
        state.dataStatus = DataStatus.FULFILLED;
      })
      .addCase(deleteCompany.fulfilled, (state) => {
        state.selectedCompany = null;
        state.dataStatus = DataStatus.FULFILLED;
      })
      .addCase(updateCompany.fulfilled, (state, actions) => {
        state.selectedCompany = actions.payload;
        state.companies.map((company) => {
          if (company.id === actions.payload.id) {
            return actions.payload;
          }
          return company;
        });
        state.dataStatus = DataStatus.FULFILLED;
      })
      .addMatcher(
        isAnyOf(
          getAllCompanies.pending,
          getCompany.pending,
          updateCompany.pending,
          createCompany.pending,
          deleteCompany.pending,
        ),
        (state) => {
          state.dataStatus = DataStatus.PENDING;
        },
      )
      .addMatcher(
        isAnyOf(
          getAllCompanies.rejected,
          getCompany.rejected,
          updateCompany.rejected,
          createCompany.rejected,
          deleteCompany.rejected,
        ),
        (state, actions) => {
          state.dataStatus = DataStatus.PENDING;
          state.error = actions.error;
        },
      );
  },
});

export { actions, name, reducer };
