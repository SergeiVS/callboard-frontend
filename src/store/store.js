import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { signInFormSlice } from "./redux/signInFormSlice/SignInFormSlice";
import { alertSlice } from "./redux/alertSlice/AlertSlice";
const rootReducer = combineSlices(signInFormSlice, alertSlice);
export const makeStore = (preloadedState) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState,
    });
    return store;
};
export const store = makeStore();
