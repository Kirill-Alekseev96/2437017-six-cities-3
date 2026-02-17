import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../type-state';
import { Offer } from '../../types/offer-data';
import { APIRoute } from '../../const';

type ChangeFavoriteStatus = {
  offerId: string;
  status: number;
}

// 1. ПОЛУЧИТЬ ВСЕ ИЗБРАННЫЕ
export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'favorites/fetchAll',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Favorite}`);
    return data;
  }
);


// 2. ИЗМЕНИТЬ СТАТУС
export const favoriteAction = createAsyncThunk<Offer, ChangeFavoriteStatus, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'favorites/changeStatus',
  async ({ offerId, status }, { extra: api }) => {
    const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${offerId}/${status}`);
    return data;

  }
);
