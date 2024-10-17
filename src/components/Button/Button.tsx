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
        type="submit"
        disabled={disabled}
        //RegularButton with variant contained, if false button variant= outlined
        $isRegularButton={isRegularButton}
        //if true: Button variant= outlined, border DELETE_BUTTON
        $isDeleteButton={isDeleteButton}
        classes="root"
      >
        {children}
      </StyledButton>
    </>
  )
}

export default Button
