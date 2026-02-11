const AUTH_TOKEN_KEY = 'six-cities'; // ключь под которым будут храниться локальные данные

export type Token = string;

//утилитарные функции. Токен будет храниться в локальном хранилище.
const getToken = (): Token => localStorage.getItem(AUTH_TOKEN_KEY) ?? ''; // получать
const saveToken = (token:Token) => localStorage.setItem(AUTH_TOKEN_KEY, token); // сохранять
const dropToken = () => localStorage.removeItem(AUTH_TOKEN_KEY); // удалять

export {getToken, saveToken, dropToken};
