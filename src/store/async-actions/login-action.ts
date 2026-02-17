/* Отправляет email/password на сервер и получает данные пользователя.*/

import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { dropToken } from '../../services/token';

import { State, AppDispatch } from '../type-state';
import { AuthData } from '../../types/auth-data';
import { saveToken } from '../../services/token';
import { APIRoute } from '../../const';
import { UserData } from '../../types/user-data';

/*UserData - возвращаем данные пользователя*/
/*AuthData - принимаем email, password*/

export const loginAction = createAsyncThunk<UserData, AuthData, {
    state: State;
    dispatch: AppDispatch;
    extra: AxiosInstance; // будет подставлен api
}>(
  'user/login',
  async({email, password}, { extra: api}) => {

    /*1. Делаем POST запрос с email и password*/
    const response = await api.post<UserData>(APIRoute.Login, { email, password });
    /* 2. Сохраняем токен в localStorage*/
    saveToken(response.data.token);
    return response.data;
  },
);


export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>
('user/logout',
  async(_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    /*Удаляем токен в localStorage при успехе*/
    dropToken();
  }
);
