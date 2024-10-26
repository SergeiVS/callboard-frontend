import { jsx as _jsx } from "react/jsx-runtime";
import { InputTypes } from "./types";
import { StyledInput } from "./styles";
const Input = ({ value, onChange, error, placeholder, label, name, type = InputTypes.TEXT, disabled = false, multiline = false, rows }) => {
    return (_jsx(StyledInput, { name: name, type: type, value: value, onChange: onChange, placeholder: placeholder, label: label, error: !!error, helperText: error, fullWidth: true, multiline: multiline, rows: rows, disabled: disabled }));
};
export default Input;
