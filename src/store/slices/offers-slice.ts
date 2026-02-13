import { createReducer } from '@reduxjs/toolkit';

import { fetchAllOffers } from '../async-actions/offers-action';

import { Offer } from '../../types/offer-data';
import { RequestStatus, AuthorizationStatus } from '../../const';


type OffersState = {
  offers: Offer[];
  status: RequestStatus;
  authStatus: AuthorizationStatus;
}

const initialState:OffersState = {
  offers: [],
  status: RequestStatus.Idle,
  authStatus: AuthorizationStatus.Unknown,
};

export const offersReducer = createReducer(initialState, (builder) => {
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
    });
});

