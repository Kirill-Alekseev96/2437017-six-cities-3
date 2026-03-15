import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { requireAuthorization } from '../action';
import { loginAction, logoutAction } from '../async-actions/login-action';
import { UserData } from '../../types/user-data';
import { checkAuthAction } from '../async-actions/authorization-action';

type AuthState = {
  authStatus: AuthorizationStatus;
  userData: UserData | null;
}

const initialState:AuthState = {
  authStatus: AuthorizationStatus.Unknown,
  userData: null,
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
      })

      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
      })

      .addCase(checkAuthAction.rejected, (state) => {
        state.userData = null;
        state.authStatus = AuthorizationStatus.NoAuth;
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

      /*Выход в акаунт*/
      .addCase(logoutAction.rejected, (state) => {
        state.userData = null;
        state.authStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export default authSlice.reducer;
