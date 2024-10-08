import { StyledButton } from "./styles"
import { ButtonProps } from "./types"

function Button({ disabled, onClick, children, isDeleteButton}: ButtonProps) {
  return (
    <>
      <StyledButton
        variant="contained"
        onClick={onClick}
        disabled={disabled}
        $isDeleteButton={isDeleteButton}
        classes="root"
      >
        {children}
      </StyledButton>
    </>
  )
}

export default Button
