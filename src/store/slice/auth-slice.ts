import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { requireAuthorization } from '../action';

type OfferState = {
  authStatus: AuthorizationStatus;
}

const initialState:OfferState = {
  authStatus: AuthorizationStatus.Unknown,
};

const authSlice = createSlice({
  name: 'authStatus',
  initialState,
  reducers: {},

  extraReducers: (builder) => { //для "чужих" действий(асинхронных)
    builder
    /*Статус авторизации*/
      .addCase(requireAuthorization, (state, action) => {
        state.authStatus = action.payload;
      });
  }
});

export default authSlice.reducer;
