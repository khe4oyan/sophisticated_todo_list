import { createSlice } from "@reduxjs/toolkit";

const createTodo = (text, priority, category) => {
  return {
    id: new Date().getTime(),
    text,
    statusIsDone: false,
    category,
    priority,
  };
};

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
    addTodo(state, action) {
      const { todoText, priority, category } = action.payload;
      const todoData = createTodo(todoText, priority, category);
      state.allTodo.unshift(todoData);
    },
    removeTodo(state, action) {
      // TODO
    },
    setTodoStatus(state, action) {
      // TODO
    },
    changeTodo(state, action) {
      // TODO
    },
  },
});

export default todoSlice.reducer;
export const { 
  addTodo, 
  removeTodo, 
  setTodoStatus, 
  changeTodo 
} = todoSlice.actions;
