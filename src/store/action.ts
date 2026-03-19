//хранилище мы должны обновлять на основании действия.
import { createAction } from '@reduxjs/toolkit';

export const setError = createAction<string | null>('six-cities/error');


