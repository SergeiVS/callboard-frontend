import { AlertSliceState } from "./types";
export declare const alertSlice: import("@reduxjs/toolkit").Slice<AlertSliceState, {
    setAlertStateOpen: import("@reduxjs/toolkit").CaseReducer<AlertSliceState, {
        payload: AlertSliceState;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
    closeAlert: import("@reduxjs/toolkit").CaseReducer<AlertSliceState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
}, "ALERT", "ALERT", {
    isOpen: (state: AlertSliceState) => boolean;
    severity: (state: AlertSliceState) => "info" | "success" | "error" | "warning" | undefined;
    cildren: (state: AlertSliceState) => import("react").ReactNode;
}>;
export declare const alertActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setAlertStateOpen: import("@reduxjs/toolkit").CaseReducer<AlertSliceState, {
        payload: AlertSliceState;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
    closeAlert: import("@reduxjs/toolkit").CaseReducer<AlertSliceState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
}, "ALERT">;
export declare const alertSelectors: {
    isOpen: import("reselect").Selector<{
        ALERT: AlertSliceState;
    }, boolean, []> & {
        unwrapped: (state: AlertSliceState) => boolean;
    };
    severity: import("reselect").Selector<{
        ALERT: AlertSliceState;
    }, "info" | "success" | "error" | "warning" | undefined, []> & {
        unwrapped: (state: AlertSliceState) => "info" | "success" | "error" | "warning" | undefined;
    };
    cildren: import("reselect").Selector<{
        ALERT: AlertSliceState;
    }, import("react").ReactNode, []> & {
        unwrapped: (state: AlertSliceState) => import("react").ReactNode;
    };
};
