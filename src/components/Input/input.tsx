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
<<<<<<< HEAD
  type = InputTypes.TEXT,
  disabled = false,
=======
  disabled=false,
  type = InputTypes.TEXT
>>>>>>> 90a0bcf5e135dcfd77c00df4bdfcaa825d3ec303
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
      disabled={disabled}
    />
  )
}

export default Input
