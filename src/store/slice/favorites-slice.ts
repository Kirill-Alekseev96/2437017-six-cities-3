import { createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer-data';
import { fetchFavoritesAction } from '../async-actions/favorite-action';
import { logoutAction } from '../async-actions/login-action';

type FavoriteState = {
  favorites: Offer[];
};

const initialState:FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
  }, // для своих (синхронных) действий

  extraReducers: (builder) => { //для "чужих" действий
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })

      /*Выход из акаунта*/
      .addCase(logoutAction.fulfilled, (state) => {
        state.favorites = [];
      });
  }
});

export default favoriteSlice.reducer;
