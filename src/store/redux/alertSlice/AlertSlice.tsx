import { createAppSlice } from "store/createAppSlice"

import { alertSliceState } from "./types"
import { alertProps } from "components/Alert/types"
import { PayloadAction } from "@reduxjs/toolkit"

const alertInitialState: alertSliceState = {
  alertProps: { severity: undefined, children: "" },
  isOpen: false,
}

export const alertSlice = createAppSlice({
  name: "ALERT",
  initialState: alertInitialState,
  reducers: create => ({
    openAlert: create.reducer(
      (state: alertSliceState, action: PayloadAction<alertProps>) => {
        let props: alertProps = {
          severity: action.payload.severity,
          children: action.payload.children,
        }
        state.alertProps = props
        state.isOpen = true
        setTimeout(() => {
          state = alertInitialState
        }, 3000)
      },
    ),
    closeAlert: create.reducer((state: alertSliceState) => {
      state = alertInitialState
    }),
  }),

  selectors: {
    props: (state: alertSliceState) => {
      return state.alertProps
    },

    isOpen: (state: alertSliceState) => {
      return state.isOpen
    },
  },
})
export const alertActions = alertSlice.actions

export const alertSelectors = alertSlice.selectors
