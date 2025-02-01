import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import turfReducer from './features/turfs/turfSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    turfs: turfReducer,
  },
});

export default store;
