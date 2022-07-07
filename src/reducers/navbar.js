import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbar: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState: initialState,
  reducers: {
    openNav: (state, { payload }) => {
      state.navbar = !state.navbar;
    },
  },
});

export const { openNav } = navbarSlice.actions;
export default navbarSlice.reducer;
