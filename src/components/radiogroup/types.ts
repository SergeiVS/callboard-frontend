import { ReactNode } from "react"

export interface RadioGroupProps {
  row: boolean
  name: string
  defaultValue?: string
  onCange: () => void
  children: ReactNode
}
