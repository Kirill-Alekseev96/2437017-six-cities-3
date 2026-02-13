import { createReducer } from '@reduxjs/toolkit';

import { fetchAllOffers } from './async-actions/offers-action';
import { fetchOfferById } from './async-actions/offer-action';
import { toggleFavorite } from './action';

import { Offer } from '../types/offer-data';
import { RequestStatus, AuthorizationStatus } from '../const';


type OffersState = {
  offers: Offer[];
  offer: Offer | null;
  status: RequestStatus;
  authStatus: AuthorizationStatus;
}

const initialState:OffersState = {
  offers: [],
  offer: null,
  status: RequestStatus.Idle,
  authStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder

    .addCase(fetchAllOffers.pending, (state) => {
      state.status = RequestStatus.Loading;
    })

    .addCase(fetchAllOffers.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.offers = action.payload;
    })

    .addCase(fetchAllOffers.rejected, (state) => {
      state.status = RequestStatus.Failed;
    })

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

    .addCase(toggleFavorite, (state, action) => {
      const offer = state.offers.find((o) => o.id === action.payload);
      if (offer) {
        // Инвертируем isFavorite
        offer.isFavorite = !offer.isFavorite;
      }
    });
});
