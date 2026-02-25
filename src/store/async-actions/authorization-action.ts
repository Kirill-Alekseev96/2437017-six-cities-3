import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { dropToken } from '../../services/token';

import { requireAuthorization } from '../action';
import { State, AppDispatch } from '../type-state';
import { APIRoute, AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user-data';

export const checkAuthAction = createAsyncThunk<UserData | null, void, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>

('user/checkAuth',
  async(_arg, {dispatch, extra:api}) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      return data;
    }catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dropToken();
      return null;
    }
  }
);
