import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categorySlice",

  initialState: {
    categories: [],
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
