export declare const useAppDispatch: import("react-redux").UseDispatch<import("redux-thunk").ThunkDispatch<{
    SIGN_IN: import("./redux/signInFormSlice/types").SignInState;
    ALERT: import("./redux/alertSlice/types").alertSliceState;
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>>;
export declare const useAppSelector: import("react-redux").UseSelector<{
    SIGN_IN: import("./redux/signInFormSlice/types").SignInState;
    ALERT: import("./redux/alertSlice/types").alertSliceState;
}>;
