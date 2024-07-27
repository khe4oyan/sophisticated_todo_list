// libs
import { createSlice } from "@reduxjs/toolkit";

const createTodo = (text, priority, category, todoStatus = false) => {
  return {
    id: new Date().getTime(),
    todoStatus: false,
    text,
    category,
    priority,
  };
};

const editTodoProp = (state, payload, propName) => {
  const { todoInd, newValue } = payload;
  const todo = state.allTodo[todoInd]
  if (todo.hasOwnProperty(propName)) {
    todo[propName] = newValue;
  }
};

const todoSlice = createSlice({
  name: "todoSlice",

  initialState: {
    allTodo: [
      {
        id: 0,
        text: "Check test task",
        todoStatus: false,
        category: "Programming",
        priority: "High",
      },
      {
        id: 1,
        text: "Try to done this todo",
        todoStatus: false,
        category: "Programming",
        priority: "Medium",
      },
      {
        id: 2,
        text: "Open test project",
        todoStatus: true,
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

      allTodos[todoInd].todoStatus = !allTodos[todoInd].todoStatus;

      // filtering allTodos without toggling todo
      const newTodos = [];
      for (let i = 0; i < allTodos.length; ++i) {
        if (i === todoInd) {
          continue;
        }

        newTodos.push(allTodos[i]);
      }

      // choose pushing or unshifting toggling todo
      if (allTodos[todoInd].todoStatus) {
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
      const allTodo = state.allTodo;

      // check array item move side
      if (fromInd < toInd) {
        // array item move side is right
        for (let i = fromInd; i < allTodo.length - 1; ++i) {
          if (i === toInd) { break; }
          const tmp = allTodo[i];
          allTodo[i] = allTodo[i + 1] ;
          allTodo[i + 1] = tmp;
        }
      } else {
        // array item move side is left
        for (let i = fromInd; i > 0; --i) {
          if (i === toInd) { break; }
          const tmp = allTodo[i];
          allTodo[i] = allTodo[i - 1] ;
          allTodo[i - 1] = tmp;
        }
      }
    },

    editTodoText(state, { payload }) {
      // variant 1 - repeat under code in under actions
      // const { todoInd, newValue } = payload;
      // state.allTodo[todoInd].text = newValue;

      // variant 2 - repeat code moved in to this function
      editTodoProp(state, payload, "text");
    },

    editTodoPriority(state, { payload }) {
      // const { todoInd, newValue } = payload;
      // state.allTodo[todoInd].priority = newValue;

      editTodoProp(state, payload, "priority");
    },

    editTodoCategory(state, { payload }) {
      // const { todoInd, newValue } = payload;
      // state.allTodo[todoInd].category = newValue;

      editTodoProp(state, payload, "category");
    },
  },
});

export default todoSlice.reducer;
export const {
  addTodo,
  removeTodo,
  toggleTodoStatus,
  editTodo,
  dragTodo,
  editTodoText,
  editTodoPriority,
  editTodoCategory,
} = todoSlice.actions;
