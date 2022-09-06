import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, ReduxStateType} from './store';

export const useAppSelector: TypedUseSelectorHook<ReduxStateType> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch