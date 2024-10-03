import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import useCasesSlice from "./slices/useCasesSlice";
import staticDataSlice from "./slices/staticDataSlice";

export const store = configureStore({
    reducer: {
        app: appSlice,
        useCases: useCasesSlice,
        staticData: staticDataSlice
    }
});