import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
    name: "service",
    initialState: {
        name: "service",
        price: "3000",
        duration: "2months",
    },
    reducers: {
        changeServiceName: (state, { payload }) => {
            state.name = payload;
        },
        changePrice: (state, { payload }) => {
            state.price = payload;
        },
    },
});

export const { changeServiceName, changePrice } = serviceSlice.actions;
export default serviceSlice.reducer;
