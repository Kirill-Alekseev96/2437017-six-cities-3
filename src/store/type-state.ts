import { store } from './index.ts';

//Тип, который автоматически получает структуру всего состояния Redux-хранилища.
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
