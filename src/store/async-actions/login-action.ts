// import type { AxiosInstance } from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// import { State, AppDispatch } from '../type-state';
// import { AuthData } from '../../types/auth-data';
// import { saveToken } from '../../services/token';
// import { requireAuthorization } from '../action';
// import { APIRoute, AuthorizationStatus } from '../../const';
// import { UserData } from '../../types/user-data';

// export const loginAction = createAsyncThunk<void, AuthData, {
//     state: State;
//     dispatch: AppDispatch;
//     extra: AxiosInstance; // будет подставлен api
// }>(
//   'use/login',
//   async({login: email, password}, {dispatch, extra: api}) => {
//     const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
//     saveToken(data.token);
//     dispatch(requireAuthorization(AuthorizationStatus.Auth));
//   },
// );
