import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { State, AppDispatch } from '../type-state';
import { APIRoute } from '../../const';

import { Offer } from '../../types/offer-data';

export type OfferID = {
  id: string;
}

export const fetchOfferById = createAsyncThunk<Offer,string,{
  state: State;
  dispatch: AppDispatch;
  extra:AxiosInstance; // будет подставлен api
}>

('fetchOffer/all',
  async(offerId, {extra: api}) => {
    const response = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return response.data;
  }
);
