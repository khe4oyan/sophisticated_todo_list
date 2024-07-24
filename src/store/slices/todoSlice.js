import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  
  initialState: {
    allTodo: [
      {
        id: 0,
        text: "Todo 1",
        statusIsDone: false,
        category: "Design",
        priority: "Low",
      },
      {
        id: 1,
        text: "Todo 2",
        statusIsDone: false,
        category: "Design",
        priority: "High",
      },
      {
        id: 2,
        text: "Todo 3",
        statusIsDone: true,
        category: "Programming",
        priority: "Meduim",
      },
    ],
  },

  reducers: {
    // TODO
  },
});

export default todoSlice.reducer;
export const {  } = todoSlice.actions;
