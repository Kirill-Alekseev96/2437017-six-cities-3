import { createReducer } from '@reduxjs/toolkit';

import { fetchAllOffers } from './async-actions/offers-action';
import { commentAction, fetchCommentsAction, fetchOfferById } from './async-actions/offer-action';

import { fetchFavoritesAction, favoriteAction } from './async-actions/favorite-action';
import { requireAuthorization, setError } from './action';
import { loginAction, logoutAction } from './async-actions/login-action';
import { fetchNearbyOffersAction } from './async-actions/offer-action';

import { Offer } from '../types/offer-data';
import { RequestStatus, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { CommentData } from '../types/comment-data';
import { checkAuthAction } from './async-actions/authorization-action';

type OffersState = {
  offers: Offer[];
  offer: Offer | null;
  nearbyOffers: Offer[];
  comments: CommentData[];
  status: RequestStatus;
  authStatus: AuthorizationStatus;
  userData: UserData | null;
  favorites: Offer[];
  error: string | null;
}

const initialState:OffersState = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  comments: [],
  status: RequestStatus.Idle,
  authStatus: AuthorizationStatus.Unknown,
  userData: null,
  favorites: [],
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder

    /*Получение Offers*/
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
    })

    .addCase(fetchCommentsAction.rejected, (state) => {
      state.comments = []; // при ошибке - пустой массив
    })

    /*Добавление новых комментариев*/
    .addCase(commentAction.fulfilled, (state, action) => {
      state.comments = [action.payload, ...state.comments];
    })

    /*Вход в акаунт*/
    .addCase(loginAction.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.authStatus = AuthorizationStatus.Auth;
    })

    .addCase(loginAction.rejected, (state) => {
      state.userData = null;
      state.authStatus = AuthorizationStatus.NoAuth;
    })

    /*Выход из акаунта*/
    .addCase(logoutAction.fulfilled, (state) => {
      state.userData = null;
      state.authStatus = AuthorizationStatus.NoAuth;
      state.offers = state.offers.map((offer) => ({
        ...offer,
        isFavorite: false,
      }));

      if (state.offer) {
        state.offer.isFavorite = false;
      }

      state.nearbyOffers = state.nearbyOffers.map((offer) => ({
        ...offer,
        isFavorite: false
      }));

      state.favorites = [];
    })

    .addCase(logoutAction.rejected, (state) => {
      state.userData = null;
      state.authStatus = AuthorizationStatus.NoAuth;
    })

    /*Статус авторизации*/
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })

    .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
      state.favorites = action.payload;
    })

    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.authStatus = AuthorizationStatus.Auth;
    })

    .addCase(checkAuthAction.rejected, (state) => {
      state.userData = null;
      state.authStatus = AuthorizationStatus.NoAuth;
    })

    /*Изменение статуса (добавить/удалить)*/
    .addCase(favoriteAction.fulfilled, (state, action) => {
      const updatedOffer = action.payload;

      state.offers = state.offers.map((offer) =>
        offer.id === updatedOffer.id ? updatedOffer : offer
      );

      if (state.offer?.id === updatedOffer.id) {
        state.offer = updatedOffer;
      }
    })

    /*Действие изм. ключа error*/
    .addCase(setError,(state, action) => {
      state.error = action.payload;
    });
});
