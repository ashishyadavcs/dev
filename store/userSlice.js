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
        deleteUser: (state, { payload }) => {
            state.data = {};
        },
    },
});

export const { saveUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
