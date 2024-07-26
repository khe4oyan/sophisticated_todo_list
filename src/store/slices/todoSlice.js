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
      const removeTodoInd = action.payload;
      const newTodos = [];

      for (let i = 0; i < state.allTodo.length; ++i) {
        if (i === removeTodoInd) {
          continue;
        }
        newTodos.push(state.allTodo[i]);
      }

      state.allTodo = newTodos;
    },

    toggleTodoStatus(state, action) {
      const todoInd = action.payload;
      const allTodos = state.allTodo;
      allTodos[todoInd].statusIsDone = !allTodos[todoInd].statusIsDone;

      const newTodos = [];

      for (let i = 0; i < allTodos.length; ++i) {
        if (i === todoInd) {
          continue;
        }

        newTodos.push(allTodos[i]);
      }

      if (allTodos[todoInd].statusIsDone) {
        // move to allTodo last elem
        newTodos.push(allTodos[todoInd]);
      } else {
        // move to first elem
        newTodos.unshift(allTodos[todoInd]);
      }

      state.allTodo = newTodos;
    },

    changeTodo(state, action) {
      // TODO
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, toggleTodoStatus, changeTodo } =
  todoSlice.actions;
