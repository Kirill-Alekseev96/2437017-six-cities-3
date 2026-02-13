// хранилище мы должны обновлять на основании действия.
import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (status: AuthorizationStatus) => ({ payload: status })
);

export const toggleFavorite = createAction('card/Favorite', (id:string) => ({payload: id,}));


