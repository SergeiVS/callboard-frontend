import type { Action, ThunkAction } from "@reduxjs/toolkit";
declare const rootReducer: import("@reduxjs/toolkit").CombinedSliceReducer<{
    ALERT: import("./redux/AlertSlice/types").alertSliceState;
    SIGN_IN: import("./redux/SignInFormSlice/types").SignInState;
}, {
    ALERT: import("./redux/AlertSlice/types").alertSliceState;
    SIGN_IN: import("./redux/SignInFormSlice/types").SignInState;
}>;
export type RootState = ReturnType<typeof rootReducer>;
export declare const makeStore: (preloadedState?: Partial<RootState>) => import("@reduxjs/toolkit").EnhancedStore<{
    ALERT: import("./redux/AlertSlice/types").alertSliceState;
    SIGN_IN: import("./redux/SignInFormSlice/types").SignInState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        ALERT: import("./redux/AlertSlice/types").alertSliceState;
        SIGN_IN: import("./redux/SignInFormSlice/types").SignInState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    ALERT: import("./redux/AlertSlice/types").alertSliceState;
    SIGN_IN: import("./redux/SignInFormSlice/types").SignInState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        ALERT: import("./redux/AlertSlice/types").alertSliceState;
        SIGN_IN: import("./redux/SignInFormSlice/types").SignInState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;
export {};
