import type { Action, ThunkAction } from "@reduxjs/toolkit";
declare const rootReducer: import("@reduxjs/toolkit").CombinedSliceReducer<{
    SIGN_IN: import("./redux/signInFormSlice/types").SignInState;
    ALERT: import("./redux/alertSlice/types").alertSliceState;
}, {
    SIGN_IN: import("./redux/signInFormSlice/types").SignInState;
    ALERT: import("./redux/alertSlice/types").alertSliceState;
}>;
export type RootState = ReturnType<typeof rootReducer>;
export declare const makeStore: (preloadedState?: Partial<RootState>) => import("@reduxjs/toolkit").EnhancedStore<{
    SIGN_IN: import("./redux/signInFormSlice/types").SignInState;
    ALERT: import("./redux/alertSlice/types").alertSliceState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        SIGN_IN: import("./redux/signInFormSlice/types").SignInState;
        ALERT: import("./redux/alertSlice/types").alertSliceState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    SIGN_IN: import("./redux/signInFormSlice/types").SignInState;
    ALERT: import("./redux/alertSlice/types").alertSliceState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        SIGN_IN: import("./redux/signInFormSlice/types").SignInState;
        ALERT: import("./redux/alertSlice/types").alertSliceState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;
export {};
