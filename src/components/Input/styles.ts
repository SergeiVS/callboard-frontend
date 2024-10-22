import { styled } from "@mui/material/styles"
import { TextField } from "@mui/material"
import { colors } from "styles/colors"

export const StyledInput = styled(TextField)`
  border-radius: 9px;
  background-color: white;
`

export const StyledInputDescription = styled(TextField)`
  border-radius: 9px;
  height: 150px;
  background-color: white;
`

// (({ theme }) => ({
// '& .MuiInputBase-root': {
//         color: theme.palette.text.primary,
//     },
//     '& .MuiOutlinedInput-root': {
//         '& fieldset': {
//             borderColor: theme.palette.primary.main,
//         },
//         '&:hover fieldset': {
//             borderColor: theme.palette.secondary.main,
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: theme.palette.success.main,
//         },
//     },

// }));
