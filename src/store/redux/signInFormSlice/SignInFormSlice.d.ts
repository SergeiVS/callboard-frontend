import { PayloadAction } from "@reduxjs/toolkit";
import { SignInState } from "./types";
import { LogIn } from "components/SignInForm/types";
export declare const signInFormSlice: import("@reduxjs/toolkit").Slice<SignInState, {
    login: {
        pending?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<undefined, string, {
            arg: LogIn;
            requestId: string;
            requestStatus: "pending";
        }, never>> | undefined;
        rejected?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<unknown, string, {
            arg: LogIn;
            requestId: string;
            requestStatus: "rejected";
            aborted: boolean;
            condition: boolean;
        } & ({
            rejectedWithValue: true;
        } | ({
            rejectedWithValue: false;
        } & {})), import("@reduxjs/toolkit").SerializedError>> | undefined;
        fulfilled?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<import("axios").AxiosResponse<any, any>, string, {
            arg: LogIn;
            requestId: string;
            requestStatus: "fulfilled";
        }, never>> | undefined;
        settled?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<import("axios").AxiosResponse<any, any>, string, {
            arg: LogIn;
            requestId: string;
            requestStatus: "fulfilled";
        }, never> | PayloadAction<unknown, string, {
            arg: LogIn;
            requestId: string;
            requestStatus: "rejected";
            aborted: boolean;
            condition: boolean;
        } & ({
            rejectedWithValue: true;
        } | ({
            rejectedWithValue: false;
        } & {})), import("@reduxjs/toolkit").SerializedError>> | undefined;
        options?: import("@reduxjs/toolkit").AsyncThunkOptions<LogIn, {
            state?: undefined;
            dispatch?: undefined;
            extra?: unknown;
            rejectValue?: unknown;
            serializedErrorType?: unknown;
            pendingMeta?: unknown;
            fulfilledMeta?: unknown;
            rejectedMeta?: unknown;
        }> | undefined;
    } & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.asyncThunk;
    } & {
        payloadCreator: import("@reduxjs/toolkit").AsyncThunkPayloadCreator<import("axios").AxiosResponse<any, any>, LogIn, {
            state?: undefined;
            dispatch?: undefined;
            extra?: unknown;
            rejectValue?: unknown;
            serializedErrorType?: unknown;
            pendingMeta?: unknown;
            fulfilledMeta?: unknown;
            rejectedMeta?: unknown;
        }>;
    };
    getUser: {
        pending?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<undefined, string, {
            arg: void;
            requestId: string;
            requestStatus: "pending";
        }, never>> | undefined;
        rejected?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<unknown, string, {
            arg: void;
            requestId: string;
            requestStatus: "rejected";
            aborted: boolean;
            condition: boolean;
        } & ({
            rejectedWithValue: true;
        } | ({
            rejectedWithValue: false;
        } & {})), import("@reduxjs/toolkit").SerializedError>> | undefined;
        fulfilled?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<any, string, {
            arg: void;
            requestId: string;
            requestStatus: "fulfilled";
        }, never>> | undefined;
        settled?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<any, string, {
            arg: void;
            requestId: string;
            requestStatus: "fulfilled";
        }, never> | PayloadAction<unknown, string, {
            arg: void;
            requestId: string;
            requestStatus: "rejected";
            aborted: boolean;
            condition: boolean;
        } & ({
            rejectedWithValue: true;
        } | ({
            rejectedWithValue: false;
        } & {})), import("@reduxjs/toolkit").SerializedError>> | undefined;
        options?: import("@reduxjs/toolkit").AsyncThunkOptions<void, {
            state?: undefined;
            dispatch?: undefined;
            extra?: unknown;
            rejectValue?: unknown;
            serializedErrorType?: unknown;
            pendingMeta?: unknown;
            fulfilledMeta?: unknown;
            rejectedMeta?: unknown;
        }> | undefined;
    } & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.asyncThunk;
    } & {
        payloadCreator: import("@reduxjs/toolkit").AsyncThunkPayloadCreator<any, void, {
            state?: undefined;
            dispatch?: undefined;
            extra?: unknown;
            rejectValue?: unknown;
            serializedErrorType?: unknown;
            pendingMeta?: unknown;
            fulfilledMeta?: unknown;
            rejectedMeta?: unknown;
        }>;
    };
    logOut: import("@reduxjs/toolkit").CaseReducer<SignInState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
}, "SIGN_IN", "SIGN_IN", {
    user: (state: SignInState) => import("./types").User;
    isPending: (state: SignInState) => boolean;
    isLoggedOn: (state: SignInState) => boolean;
    error: (state: SignInState) => string | undefined;
}>;
export declare const signInActions: import("@reduxjs/toolkit").CaseReducerActions<{
    login: {
        pending?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<undefined, string, {
            arg: LogIn;
            requestId: string;
            requestStatus: "pending";
        }, never>> | undefined;
        rejected?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<unknown, string, {
            arg: LogIn;
            requestId: string;
            requestStatus: "rejected";
            aborted: boolean;
            condition: boolean;
        } & ({
            rejectedWithValue: true;
        } | ({
            rejectedWithValue: false;
        } & {})), import("@reduxjs/toolkit").SerializedError>> | undefined;
        fulfilled?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<import("axios").AxiosResponse<any, any>, string, {
            arg: LogIn;
            requestId: string;
            requestStatus: "fulfilled";
        }, never>> | undefined;
        settled?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<import("axios").AxiosResponse<any, any>, string, {
            arg: LogIn;
            requestId: string;
            requestStatus: "fulfilled";
        }, never> | PayloadAction<unknown, string, {
            arg: LogIn;
            requestId: string;
            requestStatus: "rejected";
            aborted: boolean;
            condition: boolean;
        } & ({
            rejectedWithValue: true;
        } | ({
            rejectedWithValue: false;
        } & {})), import("@reduxjs/toolkit").SerializedError>> | undefined;
        options?: import("@reduxjs/toolkit").AsyncThunkOptions<LogIn, {
            state?: undefined;
            dispatch?: undefined;
            extra?: unknown;
            rejectValue?: unknown;
            serializedErrorType?: unknown;
            pendingMeta?: unknown;
            fulfilledMeta?: unknown;
            rejectedMeta?: unknown;
        }> | undefined;
    } & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.asyncThunk;
    } & {
        payloadCreator: import("@reduxjs/toolkit").AsyncThunkPayloadCreator<import("axios").AxiosResponse<any, any>, LogIn, {
            state?: undefined;
            dispatch?: undefined;
            extra?: unknown;
            rejectValue?: unknown;
            serializedErrorType?: unknown;
            pendingMeta?: unknown;
            fulfilledMeta?: unknown;
            rejectedMeta?: unknown;
        }>;
    };
    getUser: {
        pending?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<undefined, string, {
            arg: void;
            requestId: string;
            requestStatus: "pending";
        }, never>> | undefined;
        rejected?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<unknown, string, {
            arg: void;
            requestId: string;
            requestStatus: "rejected";
            aborted: boolean;
            condition: boolean;
        } & ({
            rejectedWithValue: true;
        } | ({
            rejectedWithValue: false;
        } & {})), import("@reduxjs/toolkit").SerializedError>> | undefined;
        fulfilled?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<any, string, {
            arg: void;
            requestId: string;
            requestStatus: "fulfilled";
        }, never>> | undefined;
        settled?: import("@reduxjs/toolkit").CaseReducer<SignInState, PayloadAction<any, string, {
            arg: void;
            requestId: string;
            requestStatus: "fulfilled";
        }, never> | PayloadAction<unknown, string, {
            arg: void;
            requestId: string;
            requestStatus: "rejected";
            aborted: boolean;
            condition: boolean;
        } & ({
            rejectedWithValue: true;
        } | ({
            rejectedWithValue: false;
        } & {})), import("@reduxjs/toolkit").SerializedError>> | undefined;
        options?: import("@reduxjs/toolkit").AsyncThunkOptions<void, {
            state?: undefined;
            dispatch?: undefined;
            extra?: unknown;
            rejectValue?: unknown;
            serializedErrorType?: unknown;
            pendingMeta?: unknown;
            fulfilledMeta?: unknown;
            rejectedMeta?: unknown;
        }> | undefined;
    } & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.asyncThunk;
    } & {
        payloadCreator: import("@reduxjs/toolkit").AsyncThunkPayloadCreator<any, void, {
            state?: undefined;
            dispatch?: undefined;
            extra?: unknown;
            rejectValue?: unknown;
            serializedErrorType?: unknown;
            pendingMeta?: unknown;
            fulfilledMeta?: unknown;
            rejectedMeta?: unknown;
        }>;
    };
    logOut: import("@reduxjs/toolkit").CaseReducer<SignInState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
}, "SIGN_IN">;
export declare const signInSelectors: {
    user: import("reselect").Selector<{
        SIGN_IN: SignInState;
    }, import("./types").User, []> & {
        unwrapped: (state: SignInState) => import("./types").User;
    };
    isPending: import("reselect").Selector<{
        SIGN_IN: SignInState;
    }, boolean, []> & {
        unwrapped: (state: SignInState) => boolean;
    };
    isLoggedOn: import("reselect").Selector<{
        SIGN_IN: SignInState;
    }, boolean, []> & {
        unwrapped: (state: SignInState) => boolean;
    };
    error: import("reselect").Selector<{
        SIGN_IN: SignInState;
    }, string | undefined, []> & {
        unwrapped: (state: SignInState) => string | undefined;
    };
};
