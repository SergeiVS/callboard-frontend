import axios from "axios";
import { createAppSlice } from "../../createAppSlice";
const signInInitialState = {
    user: {
        id: 0,
        firstName: "FirstName",
        lastName: "Lastname",
        email: "Email",
        phoneNumber: "N/A",
        roles: ["User"],
    },
    isPending: false,
    isLoggedOn: false,
    error: undefined,
};
export const signInFormSlice = createAppSlice({
    name: "SIGN_IN",
    initialState: signInInitialState,
    reducers: create => ({
        login: create.asyncThunk(async (login) => {
            let response = await axios.post(`/api/auth`, {
                email: login.email,
                password: login.password,
            }, {
                headers: {
                    "Content-Type": "application/JSON",
                },
            });
            return response;
        }, {
            pending: (state) => {
                state.isPending = true;
                state.isLoggedOn = false;
                state.error = "";
            },
            fulfilled: (state, action) => {
                if (action.payload.data.token !== undefined) {
                    localStorage.setItem("token", action.payload.data.token);
                }
                state.isPending = false;
                state.isLoggedOn = true;
            },
            rejected: (state, action) => {
                state.error = action.error.message;
                state.isPending = false;
                state.isLoggedOn = false;
                localStorage.removeItem("token");
            },
        }),
        getUser: create.asyncThunk(async () => {
            let response = await axios.get("/api/auth/me", {
                headers: {
                    "Content-Type": "application/JSON",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            return response.data;
        }, {
            pending: (state) => {
                state.isPending = true;
            },
            fulfilled: (state, action) => {
                state.isPending = false;
                state.isLoggedOn = true;
                state.user = action.payload;
            },
            rejected: (state, action) => {
                state.error = action.error.message;
                state.isLoggedOn = false;
                state.isPending = false;
                state.user = signInInitialState.user;
            },
        }),
        logOut: create.reducer((state) => {
            state.error = signInInitialState.error;
            state.isLoggedOn = false;
            state.isPending = false;
            state.user = signInInitialState.user;
            localStorage.removeItem("token");
        }),
    }),
    selectors: {
        user: (state) => {
            return state.user;
        },
        isPending: (state) => {
            return state.isPending;
        },
        isLoggedOn: (state) => {
            return state.isLoggedOn;
        },
        error: (state) => {
            return state.error;
        },
    },
});
export const signInActions = signInFormSlice.actions;
export const signInSelectors = signInFormSlice.selectors;
