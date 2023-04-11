import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import userSlice from './feature/userSlice';
import postReducer from './feature/postSlice';
import CounterSlice from './feature/CounterSlice';
import productSlice from './feature/ProductSlice';
export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    [api.reducerPath]: api.reducer,
    posts: postReducer,
    counter: CounterSlice,
    productSlice: productSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});
