import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import coinSlice from './Coins/CoinSlice';

const Store = configureStore({
  reducer: {
    coins: coinSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;
