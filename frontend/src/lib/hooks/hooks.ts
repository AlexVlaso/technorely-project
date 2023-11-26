import { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../../packages/store/store';
import { useDispatch, useSelector } from 'react-redux';

const useAppDispatch = useDispatch<AppDispatch>;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
