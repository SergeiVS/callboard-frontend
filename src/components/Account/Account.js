import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "components/Input/input";
import Button from "components/Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import { StyledAccount, StyledLable, ButtonContainer, ButtonsWrapper, } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { signInSelectors, } from "store/redux/signInFormSlice/SignInFormSlice";
import { alertActions } from "store/redux/alertSlice/AlertSlice";
import axios from "axios";
import { useState } from "react";
import { InputTypes } from "components/Input/types";
function Account() {
    const dispatch = useAppDispatch();
    const [isInputDisabled, setInputDisabled] = useState(true);
    const [isSendButtonDisabled, setSendButtonDisabled] = useState(true);
    const [isEditButtonDisabled, setEditButtonDisabled] = useState(false);
    const onEditButton = () => {
        setInputDisabled(false);
        setSendButtonDisabled(false);
        setEditButtonDisabled(true);
        console.log(isInputDisabled);
    };
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Firstname could not be empty"),
        lastName: Yup.string().required("Lastname could not be empty"),
        email: Yup.string()
            .email("Data should be in email format")
            .required("Firstname could not be empty"),
    });
    const formik = useFormik({
        initialValues: {
            userId: useAppSelector(signInSelectors.user).id,
            firstName: useAppSelector(signInSelectors.user).firstName,
            lastName: useAppSelector(signInSelectors.user).lastName,
            email: useAppSelector(signInSelectors.user).email,
            phoneNumber: useAppSelector(signInSelectors.user).phoneNumber,
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: async (values, helpers) => {
            try {
                const response = await axios.put("/api/users/update", {
                    userId: values.userId,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                }, {
                    headers: {
                        "Content-Type": "application/JSON",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                let alertSate = {
                    isOpen: true,
                    severity: "info",
                    children: response.data.message,
                };
                dispatch(alertActions.setAlertStateOpen(alertSate));
                setInputDisabled(true);
                setSendButtonDisabled(true);
                setEditButtonDisabled(false);
                getNewValues();
            }
            catch (e) {
                const error = e.response.data;
                let alertSate = {
                    isOpen: true,
                    severity: "error",
                    children: error.errorMessage,
                };
                dispatch(alertActions.setAlertStateOpen(alertSate));
            }
        },
    });
    const getNewValues = () => {
        formik.values.userId = useAppSelector(signInSelectors.user).id;
        formik.values.firstName = useAppSelector(signInSelectors.user).firstName;
        formik.values.lastName = useAppSelector(signInSelectors.user).lastName;
        formik.values.phoneNumber = useAppSelector(signInSelectors.user).phoneNumber;
        formik.values.email = useAppSelector(signInSelectors.user).email;
    };
    return (_jsx(_Fragment, { children: _jsxs(StyledAccount, { onSubmit: formik.handleSubmit, children: [_jsx(StyledLable, { children: "My Account" }), _jsx(Input, { name: "firstName", value: formik.values.firstName, onChange: formik.handleChange, disabled: isInputDisabled }), _jsx(Input, { name: "lastName", value: formik.values.lastName, onChange: formik.handleChange, disabled: isInputDisabled }), _jsx(Input, { name: "phoneNumber", value: formik.values.phoneNumber, onChange: formik.handleChange, disabled: isInputDisabled }), _jsx(Input, { name: "email", value: formik.values.email, onChange: formik.handleChange, 
                    //Input is disabled because it leads to Authentication Error
                    disabled: true, type: InputTypes.EMAIL }), _jsxs(ButtonsWrapper, { children: [_jsx(ButtonContainer, { children: _jsx(Button, { type: "button", onClick: onEditButton, disabled: isEditButtonDisabled, children: _jsx(EditIcon, {}) }) }), _jsx(ButtonContainer, { children: _jsx(Button, { isRegularButton: true, disabled: isSendButtonDisabled, children: "Send" }) })] })] }) }));
}
export default Account;
