import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { postsSlice } from "./redux/postsSlice/postsSlice"
import { signInFormSlice } from "./redux/signInFormSlice/SignInFormSlice"
import { alertSlice } from "./redux/alertSlice/AlertSlice"
import SignIn from "pages/SignIn/SignIn"

const rootReducer = combineSlices(signInFormSlice, alertSlice, postsSlice)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    
  })

  return store
}

export const store = makeStore()

export type AppStore = typeof store

export type AppDispatch = AppStore["dispatch"]

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
