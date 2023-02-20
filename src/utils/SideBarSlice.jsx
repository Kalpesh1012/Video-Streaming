import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideSlice",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    showtoggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closetoggle: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { showtoggle, closetoggle } = sideBarSlice.actions;
export default sideBarSlice.reducer;
