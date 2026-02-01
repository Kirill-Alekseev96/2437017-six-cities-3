import { createReducer } from '@reduxjs/toolkit';
import { toggelFavorite } from './action';

import { offers } from '../mock/offers';

const initialState = {
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggelFavorite, (state, action) => {
      const offer = state.offers.find((o) => o.id === action.payload);
      if (offer) {
        // Инвертируем isFavorite
        offer.isFavorite = !offer.isFavorite;
      }
    });
});
