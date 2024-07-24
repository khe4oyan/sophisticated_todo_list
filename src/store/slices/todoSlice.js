import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  
  initialState: {
    allTodo: [
      {
        id: 0,
        text: "Check test task",
        statusIsDone: false,
        category: "Programming",
        priority: "High",
      },
      {
        id: 1,
        text: "Try to add new todo",
        statusIsDone: false,
        category: "Programming",
        priority: "Medium",
      },
      {
        id: 2,
        text: "Open test project",
        statusIsDone: true,
        category: "Programming",
        priority: "Low",
      },
    ],
  },

  reducers: {
    // TODO
  },
});

export default todoSlice.reducer;
// export const {  } = todoSlice.actions;
