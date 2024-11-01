import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { FormControl } from "@mui/material";
import { StyledRadioGroup } from "components/RadioGroupComp/Styles";
function RadioGroupComp({ row, name, defaultValue, children, onCange }) {
    return (_jsx(_Fragment, { children: _jsx(FormControl, { children: _jsx(StyledRadioGroup, { row: row, name: name, onChange: onCange, defaultValue: defaultValue, children: children }) }) }));
}
export default RadioGroupComp;
