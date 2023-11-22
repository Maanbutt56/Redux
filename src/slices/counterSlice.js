// src/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => (state < 10 ? state + 2 : state),
    decrement: (state) => (state > 0 ? state - 2 : state),
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
