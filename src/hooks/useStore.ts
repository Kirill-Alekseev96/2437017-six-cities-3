import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { State, AppDispatch } from '../store/type-state.ts';

//Эта функция dispatch понимает ВСЕ наши actions
export const useAppDispatch = () => useDispatch<AppDispatch>();

// показываем TypeScript структура state
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;


