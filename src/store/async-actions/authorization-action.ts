import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { requireAuthorization } from '../action';
import { State, AppDispatch } from '../type-state';
import { APIRoute, AuthorizationStatus } from '../../const';

export const checkAuthAction = createAsyncThunk<void, void, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>

('user/checkAuth',
  async(_arg, {dispatch, extra:api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);
