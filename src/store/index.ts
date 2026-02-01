import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

//Хранилище, храниться в памяти, на клиенте.
export const store = configureStore({reducer});
