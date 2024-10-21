import { isPending, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { createAppSlice } from "../../createAppSlice"

import { SignInState } from "./types"
import { LogIn } from "components/SignInForm/types"

const signInInitialState: SignInState = {
  user: undefined,
  isPending: false,
  isLoggedOn: false,
  error: undefined,
}

export const signInFormSlice = createAppSlice({
  name: "SIGN_IN",
  initialState: signInInitialState,

  reducers: create => ({
    login: create.asyncThunk(
      async (login: LogIn) => {
        let response = await axios.post(
          `/api/auth`,
          {
            email: login.email,
            password: login.password,
          },
          {
            headers: {
              "Content-Type": "application/JSON",
            },
          },
        )
        return response
      },
      {
        pending: (state: SignInState) => {
          state.isPending = true
          state.isLoggedOn = false
          state.error = undefined
        },

        fulfilled: (state: SignInState, action) => {
          if (action.payload.data.token !== undefined) {
            localStorage.setItem("token", action.payload.data.token)
          }

          state.isPending = false
          state.isLoggedOn = true
        },

        rejected: (state: SignInState, action) => {
          state.error = action.error.message
          state.isPending = false
          state.isLoggedOn = false
          localStorage.removeItem("token")
        },
      },
    ),

    getUser: create.asyncThunk(
      async () => {
        let response = await axios.get("/api/auth/me", {
          headers: {
            "Content-Type": "application/JSON",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        return response.data
      },
      {
        pending: (state: SignInState) => {
          state.isPending = true
        },

        fulfilled: (state: SignInState, action: any) => {
          state.isPending = false
          state.user = action.payload
        },

        rejected: (state, action) => {
          state.error = action.error.message
          state.isLoggedOn = false
          state.isPending = false
          state.user = undefined
        },
      },
    ),

    logOut: create.reducer(state => {
      state = signInInitialState
      localStorage.removeItem("token")
    }),
  }),
  selectors: {
    user: (state: SignInState) => {
      return state.user
    },
    isPending: (state: SignInState) => {
      return state.isPending
    },
    isLoggedOn: (state: SignInState) => {
      return state.isLoggedOn
    },
    error: (state: SignInState) => {
      return state.error
    },
  },
})

export const signInActions = signInFormSlice.actions

export const signInSelectors = signInFormSlice.selectors