import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Offer } from '../../types/offer-data';
import { State, AppDispatch } from '../type-state';
import { APIRoute } from '../../const';
import { CommentData, NewCommentData } from '../../types/comment-data';


export const fetchOfferById = createAsyncThunk<Offer, string,{
  state: State;
  dispatch: AppDispatch;
  extra:AxiosInstance;
}>

('offer/fetchById',
  async(offerId, {extra:api}) => { // <- id приходит сюда dispatch(fetchOfferById(id)
    const response = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return response.data;
  }
);

// Загрузка предложений рядом
export const fetchNearbyOffersAction = createAsyncThunk<Offer[], string, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offers/fetchNearby',
  async (offerId: string, { extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);


// Загрузка комментарии к оферу
export const fetchCommentsAction = createAsyncThunk<CommentData[], string, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/fetchComments',
  async (offerId: string, { extra: api }) => {
    const { data } = await api.get<CommentData[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);

//Добавить новый комментарий

type PostCommentProps = {
  offerId: string;
  comment: NewCommentData;
}

export const commentAction = createAsyncThunk<CommentData, PostCommentProps, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'comments/post',
  async ({offerId, comment}, { extra: api }) => {
    const { data } = await api.post<CommentData>(`${APIRoute.Comments}/${offerId}`, comment);
    return data;
  }
);
