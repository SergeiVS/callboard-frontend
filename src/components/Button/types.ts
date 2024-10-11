// import { ReactNode } from "react";

import { MouseEventHandler, ReactNode } from "react"

export interface ButtonProps {
  disabled?: boolean
  isDeleteButton?: boolean
  isRegularButton?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
}

export enum variants {
  TEXT = "text",
  OUTLINED = "outlined",
  CONTAINED = "contained",
}
