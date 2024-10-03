import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        navbar: {
            openMenu: false
        }
    },
    reducers: {
        handleMenuStore(state, action) {
            state.navbar.openMenu = action.payload;
        }
    },
});

export default appSlice.reducer;

export const { handleMenuStore } = appSlice.actions;