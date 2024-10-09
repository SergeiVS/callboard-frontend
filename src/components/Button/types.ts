// import { ReactNode } from "react";

import { MouseEventHandler, ReactNode } from "react"

export interface ButtonProps {
  disabled?: boolean
  isDeleteButton?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}
