// import { ReactNode } from "react";

import { MouseEventHandler, ReactNode } from "react"

export interface ButtonProps {
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>|undefined
  children: ReactNode
}
