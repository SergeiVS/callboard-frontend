import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Input from "components/Input/input";
import Button from "components/Button/Button";
import { StyledLable, ButtonContainer, StyledForm } from "./styles";
import { PagesPaths } from "components/Layout/types";
import { InputTypes } from "components/Input/types";
import { useAppDispatch } from "store/hooks";
import { signInActions } from "store/redux/signInFormSlice/SignInFormSlice";
import { alertActions } from "store/redux/alertSlice/AlertSlice";
function SignInForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        ["email"]: Yup.string().required("Email is missing"),
        ["password"]: Yup.string().required("Password is missing"),
    });
    const formik = useFormik({
        initialValues: { ["email"]: "", ["password"]: "" },
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: async (values, helpers) => {
            let login = { email: values.email, password: values.password };
            const dispatchResult = await dispatch(signInActions.login(login));
            if (signInActions.login.fulfilled.match(dispatchResult)) {
                dispatch(alertActions.setAlertStateOpen({
                    isOpen: true,
                    severity: "info",
                    children: `User ${values.email} is successfully logged`,
                }));
                navigate(PagesPaths.HOME);
                helpers.resetForm();
            }
            else {
                dispatch(alertActions.setAlertStateOpen({
                    isOpen: true,
                    severity: "error",
                    children: `User ${values.email} Login failed`,
                }));
            }
        },
    });
    return (_jsx(_Fragment, { children: _jsxs(StyledForm, { onSubmit: formik.handleSubmit, children: [_jsx(StyledLable, { children: "Sign in" }), _jsx(Input, { name: "email", label: "Email", onChange: formik.handleChange, value: formik.values.email, type: InputTypes.EMAIL, error: formik.errors.email }), _jsx(Input, { name: "password", label: "Password", onChange: formik.handleChange, value: formik.values.password, type: InputTypes.PASSWORD, error: formik.errors.password }), _jsx(ButtonContainer, { children: _jsx(Button, { isRegularButton: true, disabled: !formik.dirty || formik.isSubmitting, children: "Sign in" }) })] }) }));
}
export default SignInForm;
