import { createSlice } from "@reduxjs/toolkit";

const passSlice = createSlice({
  name: "pass",
  initialState: {
    addmenu: [],
  },
  reducers: {
    addresult: (state, action) => {
      state.addmenu.push(action.payload);
    },
  },
});

export const { addresult } = passSlice.actions;
export default passSlice.reducer;
