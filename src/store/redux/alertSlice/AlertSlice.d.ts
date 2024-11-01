import { alertSliceState } from "./types";
export declare const alertSlice: import("@reduxjs/toolkit").Slice<alertSliceState, {
    setAlertStateOpen: import("@reduxjs/toolkit").CaseReducer<alertSliceState, {
        payload: alertSliceState;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
    closeAlert: import("@reduxjs/toolkit").CaseReducer<alertSliceState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
}, "ALERT", "ALERT", {
    isOpen: (state: alertSliceState) => boolean;
    severity: (state: alertSliceState) => "info" | "success" | "error" | "warning" | undefined;
    cildren: (state: alertSliceState) => import("react").ReactNode;
}>;
export declare const alertActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setAlertStateOpen: import("@reduxjs/toolkit").CaseReducer<alertSliceState, {
        payload: alertSliceState;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
    closeAlert: import("@reduxjs/toolkit").CaseReducer<alertSliceState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
}, "ALERT">;
export declare const alertSelectors: {
    isOpen: import("reselect").Selector<{
        ALERT: alertSliceState;
    }, boolean, []> & {
        unwrapped: (state: alertSliceState) => boolean;
    };
    severity: import("reselect").Selector<{
        ALERT: alertSliceState;
    }, "info" | "success" | "error" | "warning" | undefined, []> & {
        unwrapped: (state: alertSliceState) => "info" | "success" | "error" | "warning" | undefined;
    };
    cildren: import("reselect").Selector<{
        ALERT: alertSliceState;
    }, import("react").ReactNode, []> & {
        unwrapped: (state: alertSliceState) => import("react").ReactNode;
    };
};
