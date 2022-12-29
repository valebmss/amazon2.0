import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../src/slices/basketSlice";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});
