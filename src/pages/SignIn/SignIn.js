import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { PageWrapper } from "./styles";
import SignInForm from "../../components/SignInForm/SignInForm";
function SignIn() {
    return (_jsx(_Fragment, { children: _jsx(PageWrapper, { children: _jsx(SignInForm, {}) }) }));
}
export default SignIn;
