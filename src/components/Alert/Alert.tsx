import Button from "components/Button/Button"
import { StyledAlert } from "./styles"
import { alertProps } from "./types"
import { IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { alertActions } from "store/redux/alertSlice/AlertSlice"
import { useAppDispatch } from "store/hooks"

function Alert({ severity, children }: alertProps) {
  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(alertActions.closeAlert())
  }

  return (
    <>
      <StyledAlert security={severity}>
        <p>{children}</p>
        <IconButton onClick={onClick} security={severity}>
          <CloseIcon />
        </IconButton>
      </StyledAlert>
    </>
  )
}

export default Alert
