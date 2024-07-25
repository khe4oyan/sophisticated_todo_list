import { createSlice } from "@reduxjs/toolkit";
import PRIORITIES from "../../data/priority";

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
      ...PRIORITIES,
    ],
  },

  // reducers: {}
});

export default filterSlice.reducer;
// export const {  } = filterSlice.actions;