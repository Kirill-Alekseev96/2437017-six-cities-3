import { createSelector } from '@reduxjs/toolkit';
import { selectNearbyOffers, selectOffers } from '../../store/selectors/base-selectors';
import { NEARBY_OFFERS } from '../../const';


export const selectorNewNearby = createSelector(
  [selectOffers, selectNearbyOffers],
  (offers, nearbyOffers) => nearbyOffers.map((nearbyOffer) => offers.find((offer) => offer.id === nearbyOffer.id) || nearbyOffer)
);


export const selectorRangeOffersNearby = createSelector(
  [selectorNewNearby],
  (nearby) => nearby.slice(NEARBY_OFFERS.MIN_COUNT, NEARBY_OFFERS.MAX_COUNT)
);

