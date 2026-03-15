import { State } from '../type-state';

export const selectOffers = (state:State) => state.offers.offers;
export const selectStatus = (state:State) => state.offers.status;
export const selectCurrentOffer = (state:State) => state.offer.offer;
export const selectNearbyOffers = (state:State) => state.offer.nearbyOffers;
export const selectComments = (state:State) => state.offer.comments;
export const selectAuthorizationStatus = (state:State) => state.authStatus.authStatus;
export const selectFavorites = (state:State) => state.favorite.favorites;
export const selectCity = (state: State) => state.offers.city;
export const selectUser = (state: State) => state.authStatus.userData;
export const selectError = (state: State) => state.error.error;
