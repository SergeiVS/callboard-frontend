import { FormControl, FormControlLabel, FormLabel, RadioGroup } from "@mui/material"
import { RadioGroupProps } from "./types"
import { StyledRadioGroup } from "./Styles"

function RadioGroupComp({ row, name, defaultValue, onCange, children }: RadioGroupProps) {
  return (
    <>
      <FormControl>
        <StyledRadioGroup
          row={row}
          name={name}
          defaultValue={defaultValue}
          onCange={onCange}
        >{children}
            {/* //Here will be placed <FormControlLabel/> with all needed props
            example <FormControlLable value="NEED HELP" 
            control={<Radio/>} lable="Need Help" size="large"/> */}
        </StyledRadioGroup>
      </FormControl>
    </>
  )
}

export default RadioGroupComp
