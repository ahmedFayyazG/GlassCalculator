import { configureStore } from "@reduxjs/toolkit";
import DisplayReducer from "./redux/Displayslice";

export const store = configureStore({
    reducer: {
        display: DisplayReducer 
    },
})