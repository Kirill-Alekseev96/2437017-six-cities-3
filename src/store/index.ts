import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import offersSlice from './slice/offers-slice';
import offerSlice from './slice/offer-slice';
import authSlice from './slice/auth-slice';


const api = createAPI();
//Хранилище, храниться в памяти, на клиенте.
export const store = configureStore({
  reducer:{
    offers: offersSlice,
    offer: offerSlice,
    authStatus: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
