import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import SignUpForm from "../../components/SingUpForm/SignUpForm";
import { PageWrapper } from "./styles";
function SignUp() {
    return (_jsx(_Fragment, { children: _jsx(PageWrapper, { children: _jsx(SignUpForm, {}) }) }));
}
export default SignUp;
