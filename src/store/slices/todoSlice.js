// libs
import { createSlice } from "@reduxjs/toolkit";

const createTodo = (text, priority, category, statusIsDone = false) => {
  return {
    id: new Date().getTime(),
    statusIsDone: false,
    text,
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
        text: "Try to done this todo",
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
      const removeTodoInd = action.payload;
      const newTodos = [];

      // filtering allTodos without toggling todo
      for (let i = 0; i < state.allTodo.length; ++i) {
        if (i === removeTodoInd) {
          continue;
        }
        newTodos.push(state.allTodo[i]);
      }

      state.allTodo = newTodos;
    },

    toggleTodoStatus(state, action) {
      const allTodos = state.allTodo;
      const todoInd = action.payload;

      allTodos[todoInd].statusIsDone = !allTodos[todoInd].statusIsDone;

      // filtering allTodos without toggling todo
      const newTodos = [];
      for (let i = 0; i < allTodos.length; ++i) {
        if (i === todoInd) {
          continue;
        }

        newTodos.push(allTodos[i]);
      }

      // choose pushing or unshifting toggling todo
      if (allTodos[todoInd].statusIsDone) {
        // move to allTodo last elem
        newTodos.push(allTodos[todoInd]);
      } else {
        // move to first elem
        newTodos.unshift(allTodos[todoInd]);
      }

      state.allTodo = newTodos;
    },

    editTodo(state, { payload }) {
      const { todoInd, newTodoData } = payload;
      const changingTodo = state.allTodo[todoInd];

      changingTodo.text = newTodoData[0];
      changingTodo.priority = newTodoData[1];
      changingTodo.category = newTodoData[2];
    },

    dragTodo(state, { payload }) {
      const { fromInd, toInd } = payload;
      // TODO
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, toggleTodoStatus, editTodo, dragTodo } =
  todoSlice.actions;
