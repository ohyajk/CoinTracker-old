import { configureStore } from '@reduxjs/toolkit';
import homeRed from './home/homeRed';

const store = configureStore({
  counter: homeRed,
});

export default store;
