import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: false,
  },
  reducers: {
    saveUser: (state, { payload }) => {
      state.data = payload;
    },
    logout: (state, { payload }) => {
      state.data = false;
    },
  },
});

export const { saveUser, logout } = userSlice.actions;
export default userSlice.reducer;
