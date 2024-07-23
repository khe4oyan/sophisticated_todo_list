// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import todoSlice from './slices/todoSlice';

const store = configureStore({
  reducer: {
    todoSlice,
  },
});

export default store;