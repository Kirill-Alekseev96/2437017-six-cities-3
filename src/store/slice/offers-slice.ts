import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer-data';
import { fetchAllOffers } from '../async-actions/offers-action';
import { RequestStatus } from '../../const';

type OffersState = {
  offers: Offer[];
  city: string;
  status: RequestStatus;
}

const initialState:OffersState = {
  offers: [],
  city: 'Paris',
  status: RequestStatus.Idle,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setCity:(state, action:PayloadAction<string>) => {
      state.city = action.payload;
    }
  }, // для своих (синхронных) действий

  extraReducers: (builder) => { //для "чужих" действий
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
      });
  }
});

export const { setCity } = offersSlice.actions;
export default offersSlice.reducer;
