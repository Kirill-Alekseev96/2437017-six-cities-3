// хранилище мы должны обновлять на основании действия.
import { createAction } from '@reduxjs/toolkit';

// должен быть записан тип действия, что бы отлечить одно действие от другого.
export const toggelFavorite = createAction('card/Favorite');
