import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { PageWrapper } from "./styles";
import SignUpForm from "components/SingUpForm/SignUpForm";
function SignUp() {
    return (_jsx(_Fragment, { children: _jsx(PageWrapper, { children: _jsx(SignUpForm, {}) }) }));
}
export default SignUp;
