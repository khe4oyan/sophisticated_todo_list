import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterSlice",

  initialState: {
    filters: [
      {
        label: "Finished",
        key: "1",
      },
      {
        label: "Unfinished",
        key: "2",
      },
      {
        label: "Priority",
        key: "3",
        children: [
          {
            key: "3-1",
            label: "Low",
          },
          {
            key: "3-2",
            label: "Medium",
          },
          {
            key: "3-3",
            label: "Hight",
          },
        ],
      },
      {
        label: "Category",
        key: "4",
        children: [
          {
            key: "4-1",
            label: "Design",
          },
          {
            key: "4-2",
            label: "Programming",
          },
        ],
      },
      {
        label: "Reset",
        key: "5",
        danger: true,
      },
    ],
  },

  reducers: {
    addNewFilter() {
      // TODO
    },
    delFilter() {
      // TODO: delete only user's filters
    },
  }
});

export default filterSlice.reducer;
export const {  } = filterSlice.actions;