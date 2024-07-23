import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  
  initialState: {
    allTodo: [],
  },

  reducers: {
    // TODO
  },
});

export default todoSlice.reducer;
export const {  } = todoSlice.actions;
