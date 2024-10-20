import React from "react"
import { InputProps, InputTypes } from "./types"
import { StyledInput, StyledInputDescription } from "./styles"

const Input = ({
  value,
  onChange,
  error,
  placeholder,
  label,
  name,
  type = InputTypes.TEXT
}: InputProps) => {
  return (
    <StyledInput
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
      error={!!error}
      helperText={error}
      fullWidth
    />
  )
}

export default Input
