import { StyledButton } from "./styles"
import { ButtonProps } from "./types"

function Button({ disabled, onClick, children }: ButtonProps) {
  return (
    <>
      <StyledButton variant="contained" onClick={onClick} disabled={disabled}>
        {children}
      </StyledButton>
    </>
  )
}

export default Button
