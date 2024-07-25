// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import todoSlice from './slices/todoSlice';
import filterSlice from "./slices/filterSlice";
import categorySlice from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    todoSlice,
    filterSlice,
    categorySlice,
  },
});

export default store;