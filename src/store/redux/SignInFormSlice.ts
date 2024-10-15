import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { create } from "domain"
import axios from "axios"
import { createAppSlice } from "../createAppSlice"

import { SignInState, RequestUrl } from "./types"
import { LogIn } from "components/SignInForm/types"
import { Pending } from "@mui/icons-material"

const SignInInitialState: SignInState = {
  token: undefined,
  isPending: false,
  isLoggedOn: false,
  error: undefined,
}

export const SignInFormSlice = createAppSlice({
  name: "SIGN_IN",
  initialState: SignInInitialState,

  reducers: create => ({
    login: create.asyncThunk(async (action: PayloadAction<LogIn>) => {
      let response = await axios.post(
        `${RequestUrl}/api/auth`,
        {
          email: action.payload.email,
          password: action.payload.password,
        },
        {
          headers: {
            "Content-Type": "application/JSON",
          },
        },
      )
      return response
    },
    //TODO Pending, Success
),
  }),
})
