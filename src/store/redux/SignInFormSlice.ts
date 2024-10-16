import { PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { createAppSlice } from "../createAppSlice"

import { SignInState, RequestUrl } from "./types"
import { LogIn } from "components/SignInForm/types"

const signInInitialState: SignInState = {
  token: undefined,
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
          state.token = action.payload.data.token
          console.log(state.token)
          state.isPending = false
          state.isLoggedOn = true
        },
        rejected: (state: SignInState, action) => {
          state.error = action.error.message
          state.isPending = false
          state.isLoggedOn = false
          state.token = undefined
        },
      },
    ),

    logOut: create.reducer((state: SignInState) => {
      state = signInInitialState
    }),
  }),
})

export const signInActions = signInFormSlice.actions

export const signInSelectors = signInFormSlice.selectors
