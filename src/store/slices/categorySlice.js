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
      state.categories.push({ value: action.payload });
    },

    deleteCategory(state, action) {
      const newCategories = [];

      for (let i = 0; i < state.categories.length; ++i) {
        if (i === action.payload) { continue; }
        newCategories.push(state.categories[i]);
      }

      state.categories = newCategories;
    },
  },
});

export default categorySlice.reducer;
export const { addNewCategory, deleteCategory } = categorySlice.actions;
