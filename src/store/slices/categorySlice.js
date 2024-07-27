// libs
import { createSlice } from "@reduxjs/toolkit";

const initCategories = () => {
  // default categories
  const categories = [
    { value: "Programming" },
    { value: "Design" },
    { value: "Other" },
  ];

  // TODO: add user custom categories in localStorage

  return categories;
};

const categorySlice = createSlice({
  name: "categorySlice",

  initialState: {
    categories: initCategories(),
  },

  reducers: {
    addNewCategory(state, action) {
      // TODO
    },
    deleteCategory(state, action) {
      // TODO
    },
  },
});

export default categorySlice.reducer;
export const { addNewCategory, deleteCategory } = categorySlice.actions;
