// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import testSlice from './slices/test';

const store = configureStore({
  reducer: {
    testSlice: testSlice,
  },
});

export default store;