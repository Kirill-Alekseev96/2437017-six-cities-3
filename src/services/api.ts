import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { processErrorHandle } from '../components/error-message/error-process';

/*справочник (словарь) HTTP-статусов*/

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true, // 400 - Неверный запрос
  [StatusCodes.UNAUTHORIZED]: true, // 401 - Не авторизован
  [StatusCodes.NOT_FOUND]: true, // 404 - Не найдено
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const enum Default {
  BaseUrl= 'https://15.design.htmlacademy.pro/six-cities',
  Timeout = 5000,
}

export const createAPI = ():AxiosInstance => {
  const api = axios.create({
    baseURL: Default.BaseUrl as string,
    timeout: Default.Timeout as number,
  });

  //описываем перехватчики, т.к некоторые запросы будут требовать заголовка X-Token = token
  api.interceptors.request.use((config) => {
    const token = getToken(); // token получаем с помощью функции расположенной в файле token.ts

    if(token && config.headers) {
      config.headers['X-Token'] = token;
    }
    return config;
  });

  // Перехватчик ответов: обрабатываем ошибки
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{message: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        processErrorHandle(error.response.data.message);
      }else {
        processErrorHandle('Произошла неизвестная ошибка');
      }
      throw error;
    });

  return api;
};
