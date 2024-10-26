import { createAppSlice } from "store/createAppSlice";
const alertInitialState = {
    isOpen: false,
    children: undefined,
    severity: undefined,
};
export const alertSlice = createAppSlice({
    name: "ALERT",
    initialState: alertInitialState,
    reducers: create => ({
        setAlertStateOpen: create.reducer((state, action) => {
            state.isOpen = action.payload.isOpen;
            state.children = action.payload.children;
            state.severity = action.payload.severity;
        }),
        closeAlert: create.reducer((state) => {
            state.isOpen = alertInitialState.isOpen;
            state.children = alertInitialState.children;
            state.severity = alertInitialState.severity;
        }),
    }),
    selectors: {
        isOpen: (state) => {
            return state.isOpen;
        },
        severity: (state) => {
            return state.severity;
        },
        cildren: (state) => {
            return state.children;
        },
    },
});
export const alertActions = alertSlice.actions;
export const alertSelectors = alertSlice.selectors;
