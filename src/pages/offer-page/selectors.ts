import { createSelector } from '@reduxjs/toolkit';
import { selectNearbyOffers, selectOffers } from '../../store/selectors/base-selectors';


export const selectorNewNearby = createSelector(
  [selectOffers, selectNearbyOffers],
  (offers, nearbyOffers) => nearbyOffers.map((nearbyOffer) => offers.find((offer) => offer.id === nearbyOffer.id) || nearbyOffer)
);
