import { FormControl, FormLabel } from "@mui/material"
import styled from "@emotion/styled"
import { colors } from "styles/colors"
import { FormsCss } from "styles/CommonCss"

export const StyledSignInForm = styled(FormControl)`
  display: flex;
  gap: 25px;
  padding: 30px;
  width: 540px;
  height: fit-content;
  background-color: ${colors.LIGHTBLUE};
  border-radius: 9px;
`
export const StyledLable = styled(FormLabel)`
  color: ${colors.GREY};
  font-size: 22px;
`

export const ButtonContainer = styled.div`
  align-self: center;
  width: 100px;
`
