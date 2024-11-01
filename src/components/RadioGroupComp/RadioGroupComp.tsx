import { FormControl } from "@mui/material"
<<<<<<< HEAD:src/components/RadioGroupComp/RadioGroupComp.tsx
import { RadioGroupProps } from "components/RadioGroupComp/types" 
import { StyledRadioGroup } from "components/RadioGroupComp/Styles" 
=======

import { RadioGroupProps } from "components/Radiogroup/types" 
import { StyledRadioGroup } from "components/Radiogroup/Styles" 
>>>>>>> d7f8f5b7543003277ed81fd78e1e7653dae9b37b:src/components/radiogroup/RadioGroupComp.tsx

function RadioGroupComp({ row, name, defaultValue, children, onCange}: RadioGroupProps) {
  return (
    <>
      <FormControl>
        <StyledRadioGroup
          row={row}
          name={name}
          onChange={onCange}
          defaultValue={defaultValue}
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
