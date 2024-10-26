import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Input from "components/Input/input";
import Button from "components/Button/Button";
import { alertActions } from "store/redux/alertSlice/AlertSlice";
import { PagesPaths } from "components/Layout/types";
import { StyledSignUpForm, StyledLable, ButtonContainer } from "./styles";
import axios from "axios";
import { InputTypes } from "components/Input/types";
import { useAppDispatch } from "store/hooks";
function SignUpForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First name is missing"),
        lastName: Yup.string().required("First name is missing"),
        email: Yup.string()
            .email("Data should be in email format")
            .required("Email is missing"),
        password: Yup.string().required("Password is missing").min(8),
    });
    const formik = useFormik({
        initialValues: {
            ["firstName"]: "",
            ["lastName"]: "",
            ["phoneNumber"]: "",
            ["email"]: "",
            ["password"]: "",
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: async (values, helpers) => {
            try {
                const response = await axios.post("/api/auth/signing", {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phoneNumber: values.phoneNumber,
                    email: values.email,
                    password: values.password,
                });
                dispatch(alertActions.setAlertStateOpen({
                    isOpen: true,
                    severity: "success",
                    children: response.data.message,
                }));
                helpers.resetForm();
                navigate(PagesPaths.SIGNIN);
            }
            catch (e) {
                const error = e.response.data;
                dispatch(alertActions.setAlertStateOpen({
                    isOpen: true,
                    severity: "error",
                    children: error.errorMessage,
                }));
            }
        },
    });
    return (_jsx(_Fragment, { children: _jsxs(StyledSignUpForm, { onSubmit: formik.handleSubmit, children: [_jsx(StyledLable, { children: "Sign in" }), _jsx(Input, { name: "firstName", label: "Firstname", onChange: formik.handleChange, value: formik.values.firstName }), _jsx(Input, { name: "lastName", label: "Lastname", onChange: formik.handleChange, value: formik.values.lastName }), _jsx(Input, { name: "phoneNumber", label: "Phone number", onChange: formik.handleChange, value: formik.values.phoneNumber }), _jsx(Input, { name: "email", label: "Email", onChange: formik.handleChange, value: formik.values.email, type: InputTypes.EMAIL }), _jsx(Input, { name: "password", label: "Password", onChange: formik.handleChange, value: formik.values.password, type: InputTypes.PASSWORD }), _jsx(ButtonContainer, { children: _jsx(Button, { isRegularButton: true, disabled: !formik.dirty || formik.isSubmitting, children: "Sign Up" }) })] }) }));
}
export default SignUpForm;
