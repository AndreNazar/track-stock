import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import menuReducer from './slices/menuSlice';
import dialogReducer from './slices/dialogSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, 
    menu: menuReducer, 
    dialog: dialogReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;