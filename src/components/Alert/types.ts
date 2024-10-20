import { ReactNode } from "react"

export interface alertProps {
  severity: "error" | "info" | "success" | "warning" | undefined
  children: ReactNode
}
