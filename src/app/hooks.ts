import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useAppSelector = useSelector<RootState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
