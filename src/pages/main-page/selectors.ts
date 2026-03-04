import { createSelector } from '@reduxjs/toolkit';
import { selectStatus, selectOffers } from '../../store/selectors/base-selectors';
import { RequestStatus } from '../../const';


export const selectIsLoading = createSelector(
  [selectStatus],
  (status) => status === RequestStatus.Loading
);

export const selectHasAnyFavorite = createSelector(
  [selectOffers],
  (offers) => offers.some((offer) => offer.isFavorite)
);
