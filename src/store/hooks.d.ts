export declare const useAppDispatch: import("react-redux").UseDispatch<import("redux-thunk").ThunkDispatch<{
    ALERT: import("./redux/AlertSlice/types").AlertSliceState;
    SIGN_IN: import("./redux/SignInFormSlice/types").SignInState;
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>>;
export declare const useAppSelector: import("react-redux").UseSelector<{
    ALERT: import("./redux/AlertSlice/types").AlertSliceState;
    SIGN_IN: import("./redux/SignInFormSlice/types").SignInState;
}>;
