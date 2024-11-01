import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { StyledButton } from "./styles";
import { variants } from "./types";
function Button({ disabled = false, onClick, children, isDeleteButton = false, isRegularButton, type = "submit", }) {
    const variant = isDeleteButton || !isRegularButton ? variants.OUTLINED : variants.CONTAINED;
    return (_jsx(_Fragment, { children: _jsx(StyledButton, { variant: variant, onClick: onClick, type: type, disabled: disabled, "$isRegularButton": isRegularButton, "$isDeleteButton": isDeleteButton, children: children }) }));
}
export default Button;
