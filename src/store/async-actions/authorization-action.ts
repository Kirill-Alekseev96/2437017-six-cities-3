import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { State, AppDispatch } from '../type-state';
import { APIRoute } from '../../const';
import { UserData } from '../../types/user-data';

export const checkAuthAction = createAsyncThunk<UserData | null, void, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>

('user/checkAuth',
  async(_arg, {extra:api}) => {
    const response = await api.get<UserData>(APIRoute.Login);
    return response.data;
  }
);
