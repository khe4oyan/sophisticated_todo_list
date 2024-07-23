import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "testSlice",
  
  initialState: {
    test: "test",
  },

  reducers: {
    setNewTest(state, action) {
      state.test = action.payload;
    },
  },
});

export default testSlice.reducer;
export const { setNewTest } = testSlice.actions;
