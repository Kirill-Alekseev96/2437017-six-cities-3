import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Offer } from '../../types/offer-data';
import { State, AppDispatch } from '../type-state';
import { APIRoute } from '../../const';

export const fetchOfferById = createAsyncThunk<Offer, string,{
  state: State;
  dispatch: AppDispatch;
  extra:AxiosInstance;
}>

('offer/fetchById',
  async(offerId, {extra:api}) => {
    const response = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return response.data;
  }
);
