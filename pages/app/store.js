import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../src/slices/basketSlices";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});