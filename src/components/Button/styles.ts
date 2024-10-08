import { styled } from "@mui/material/styles"
import MuiButton from "@mui/material/Button"
import { colors } from "../../styles/colors"

interface StyledButtonProps {
  $isDeleteButton?: boolean | undefined
}

const getButtonColor = (isDeleteButton: boolean | undefined) => {
  return isDeleteButton ? colors.DELETE_BUTTON : colors.DEEPBLUE
}

export const StyledButton = styled(MuiButton)<StyledButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: ${({ $isDeleteButton }) => getButtonColor($isDeleteButton)};
  & :disabled {
    background-color: ${colors.DARK_GREY};
  }
`
