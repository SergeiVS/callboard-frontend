import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Radio } from "@mui/material";
import { StyledRadioButton } from "./styles";
import { colors } from "../../styles/colors";
function RadioButton({ value, lable }) {
    return (_jsx(_Fragment, { children: _jsx(StyledRadioButton, { control: _jsx(Radio, {}), color: colors.DEEPBLUE, labelPlacement: "end", value: value, label: lable }) }));
}
export default RadioButton;
