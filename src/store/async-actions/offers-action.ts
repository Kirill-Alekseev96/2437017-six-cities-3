import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Offer } from '../../types-props';
import { State, AppDispatch } from '../type-state';
import { APIRoute } from '../../const';


export const fetchAllOffers = createAsyncThunk<Offer[], void, {
  state: State;
  dispatch: AppDispatch;
  extra:AxiosInstance; // будет подставлен api
}>
// описание колбэка
('fetchOffers/all',
  async(_arg, {extra: api}) => {
  // Делаем запрос к серверу
    const response = await api.get<Offer[]>(APIRoute.Offers);
    return response.data; // Автоматически попадет в редюсер!
  }
);
