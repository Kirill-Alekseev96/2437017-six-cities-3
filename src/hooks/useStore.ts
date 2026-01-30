import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { State, AppDispatch } from '../store/type-state.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;


