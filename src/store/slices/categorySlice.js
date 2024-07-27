// libs
import { createSlice } from "@reduxjs/toolkit";

// tools
import ST from "../../tools/localStorage";

const initCategories = () => {
  let categories = ST.get('categories');

  // if first visit then set default categories
  if (!categories) {
    const defaultCategories = [
      { value: "Programming" },
      { value: "Design" },
      { value: "Life" },
      { value: "Other" },
    ];

    categories = defaultCategories;
    ST.set("categories", defaultCategories);
  }

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
