import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterSlice",

  initialState: {
    filters: [
      {
        label: "Done",
        value: true,
      },
      {
        label: "Undone",
        value: false,
      },
      {
        label: "Low",
        value: "Low",
      },
      {
        label: "Meduim",
        value: "Meduim",
      },
      {
        label: "High",
        value: "High",
      },
    ],
  },

  // reducers: {}
});

export default filterSlice.reducer;
// export const {  } = filterSlice.actions;