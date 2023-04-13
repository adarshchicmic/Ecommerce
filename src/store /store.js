import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import userSlice from './feature/userSlice';
import postReducer from './feature/postSlice';
import CounterSlice from './feature/CounterSlice';
import productSlice from './feature/ProductSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();
export const reduxStorage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const reducers = combineReducers({
  userSlice: userSlice.reducer,
  [api.reducerPath]: api.reducer,
  posts: postReducer,
  counter: CounterSlice,
  productSlice: productSlice.reducer,
});
const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['userSlice'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);
    return middlewares;
  },
});
const persistor = persistStore(store);
setupListeners(store.dispatch);
export { store, persistor };
