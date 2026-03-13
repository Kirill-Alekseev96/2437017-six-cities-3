import { createSlice } from '@reduxjs/toolkit';
import { CommentData } from '../../types/comment-data';
import { Offer } from '../../types/offer-data';
import { fetchCommentsAction, fetchNearbyOffersAction, fetchOfferById } from '../async-actions/offer-action';
import { RequestStatus } from '../../const';

type OfferState = {
  offer: Offer | null;
  nearbyOffers: Offer[];
  comments: CommentData[];
  status: RequestStatus;
}

const initialState:OfferState = {
  offer: null,
  nearbyOffers: [],
  comments: [],
  status: RequestStatus.Idle,
};


const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},

  extraReducers: (builder) => { //для "чужих" действий(асинхронных)
    builder
      /*Получение Offer по id*/
      .addCase(fetchOfferById .pending, (state) => {
        state.status = RequestStatus.Loading;
      })

      .addCase(fetchOfferById.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offer = action.payload;
      })

      .addCase(fetchOfferById .rejected, (state) => {
        state.status = RequestStatus.Failed;
        state.offer = null;
      })

      /*Получение Offers по близости выбранного Offer по id*/
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload; // сохраняем предложения рядом
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.nearbyOffers = []; // при ошибке - пустой массив
      })

      /*Получение комментариев*/
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});

export default offerSlice.reducer;


