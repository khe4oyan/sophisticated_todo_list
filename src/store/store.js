// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import todoSlice from './slices/todoSlice';
import filterSlice from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    todoSlice,
    filterSlice,
  },
});

export default store;