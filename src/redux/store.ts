import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
});
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']