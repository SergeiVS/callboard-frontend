
import { Radio } from "@mui/material"
import {SyledRadioButton} from "./styles"
import {StyledRadioButtonProps} from "./types"
import { colors } from "styles/colors"

function RadioButton({value, lable}:StyledRadioButtonProps){
    return(
    <>
    <SyledRadioButton control={<Radio/>} color={colors.DEEPBLUE} labelPlacement="end" value={value} label={lable}/>
    </>)
}

export default RadioButton