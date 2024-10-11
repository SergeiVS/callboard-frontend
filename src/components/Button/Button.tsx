import { StyledButton } from "./styles"
import { ButtonProps } from "./types"
import { variants } from "./types"

function Button({
  disabled,
  onClick,
  children,
  isDeleteButton,
  isRegularButton,
}: ButtonProps) {

  const variant = isDeleteButton || !isRegularButton ? variants.OUTLINED : variants.CONTAINED
  

  return (
    <>
      <StyledButton
        variant={variant}
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
