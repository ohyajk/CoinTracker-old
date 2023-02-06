import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const counterSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {

  },
});

export const { } = counterSlice.actions;
export default counterSlice.reducer;
