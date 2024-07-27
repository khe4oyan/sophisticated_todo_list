// libs
import { createSlice } from "@reduxjs/toolkit";

// constants
import PRIORITY_OPTIONS from "../../data/priorityOptions";
import STATUS_OPTIONS from "../../data/statusOptions";

const filterSlice = createSlice({
  name: "filterSlice",

  initialState: {
    filters: [
      ...STATUS_OPTIONS,
      ...PRIORITY_OPTIONS,
    ],
  },

  // reducers: {}
});

export default filterSlice.reducer;
// export const {  } = filterSlice.actions;