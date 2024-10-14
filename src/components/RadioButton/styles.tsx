import { styled, FormControlLabel } from "@mui/material"

import { colors } from "styles/colors"

export const SyledRadioButton = styled(FormControlLabel)`
  & .MuiRadio-colorPrimary {
    color: ${colors.DEEPBLUE};
  }
  & .Mui-checked {
    color: ${colors.DEEPBLUE};
  }
`
