import { State } from '../type-state';

export const selectOffers = (state:State) => state.offers;
export const selectStatus = (state:State) => state.status;
export const selectCurrentOffer = (state:State) => state.offer;
export const selectNearbyOffers = (state:State) => state.nearbyOffers;
export const selectAuthorizationStatus = (state:State) => state.authStatus;
export const selectFavorites = (state:State) => state.favorites;
