import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import userSlice from '../services/feature/userSlice';
import postReducer from '../services/feature/postSlice';
export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    [api.reducerPath]: api.reducer,
    posts: postReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});
