import { combineReducers } from '@reduxjs/toolkit';
import { offersReducer } from './reducer';
import { offerReducer } from './slices/offer-slice';

// 👇 НЕ экспортируем тип отсюда!
export const rootReducer = combineReducers({
  offers: offersReducer,
  offer: offerReducer,

});
