import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const api = await fetch('https://api.coinstats.app/public/v1/coins');
  const res = await api.json();
  return res;
});

const coinSlice = createSlice({
  name: 'coinSlice',
  initialState: {
    data: [],
    selectedCoin: [],
    loading: false,
    error: null,
  },
  reducers: {
    addCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { addCoin } = coinSlice.actions;

export default coinSlice.reducer;
