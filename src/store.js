// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const rootReducer = {
  counter: counterReducer,
  // Add other reducers here if you have them
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
