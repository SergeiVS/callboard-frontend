import { FormControl, FormLabel } from "@mui/material"
import styled from "@emotion/styled"
import { colors } from "styles/colors"
import { FormsCss } from "styles/CommonCss"

export const StyledSignInForm = styled(FormControl)`
  ${FormsCss}
  
  /* display: flex; */
  /*
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* gap: 20px;
  padding: 20px;
  width: 540px;
  height: fit-content;
  background-color: ${colors.LIGHTBLUE};
  border-radius: 9px; */
`
export const StyledLable = styled(FormLabel)``

export const ButtonWraper = styled.div`
  align-self: center;
  width: 100px;
`
