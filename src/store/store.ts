import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import calculatorSlice from './calculatorSlice/calculatorSlice';

const store = configureStore({
  reducer: {
    calc: calculatorSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
