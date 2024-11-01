import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "components/Input/input";
import Button from "components/Button/Button";
import RadioButton from "components/RadioButton/RadioButton";
import RadioGroupComp from "../RadioGroupComp/RadioGroupComp";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { signInSelectors } from "store/redux/SignInFormSlice/SignInFormSlice";
import { alertActions } from "store/redux/AlertSlice/AlertSlice";
import { StyledLable, StyledPostCard, ButtonWraper, } from "components/CreatePostForm/styles";
import { PagesPaths } from "components/Layout/types";
function CreatePostForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [file, setFiles] = useState([]); //
    const [fileNames, setFileNames] = useState([]);
    const validationSchema = Yup.object().shape({
        header: Yup.string()
            .required("Header is required field")
            .min(5, "Header should be longer as 5 symbols"),
        description: Yup.string()
            .required("Description is required field")
            .min(5, "Description should be longer as 5 symbols")
            .max(200, "Description should not be longer as 200 symbols"),
    });
    const userId = useAppSelector(signInSelectors.user).id;
    const formik = useFormik({
        initialValues: {
            userId: { userId },
            subject: "",
            header: "",
            description: "",
            photoLink: "",
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: async (values, helpers) => {
            try {
                const response = await axios.post("/api/posts", {
                    userId: userId,
                    subject: values.subject,
                    header: values.header,
                    description: values.description,
                    photoLink: values.photoLink,
                }, {
                    headers: {
                        "Content-Type": "application/JSON",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                dispatch(alertActions.setAlertStateOpen({
                    isOpen: true,
                    severity: "success",
                    children: response.data.message,
                }));
                helpers.resetForm();
                navigate(PagesPaths.MYPOSTS);
            }
            catch (e) {
                console.log(e);
                const error = e.response.data;
                dispatch(alertActions.setAlertStateOpen({
                    isOpen: true,
                    severity: "error",
                    children: error.errorMessage,
                }));
            }
        },
    });
    const handleFileChange = (event) => {
        if (event.target.files) {
            const selectedPhoto = Array.from(event.target.files);
            setFiles(selectedPhoto);
            const names = selectedPhoto.map(file => file.name);
            setFileNames(names);
        }
    };
    const handleUploadClick = () => {
        document.getElementById("photo-upload")?.click();
    };
    return (_jsx(_Fragment, { children: _jsxs(StyledPostCard, { onSubmit: formik.handleSubmit, children: [_jsx(StyledLable, { children: "Create Post" }), _jsxs(RadioGroupComp, { row: true, name: "subject", onCange: formik.handleChange, children: [_jsx(RadioButton, { value: "NEED HELP", lable: "Need Help" }), _jsx(RadioButton, { value: "OFFER HELP", lable: "Offer Help" })] }), _jsx(Input, { name: "header", label: "Headline", onChange: formik.handleChange, error: formik.errors.header }), _jsx(Input, { name: "description", label: "Description...", onChange: formik.handleChange, multiline: true, rows: 5, error: formik.errors.description }), _jsxs("label", { htmlFor: "photo-upload", style: { display: "inline-block" }, children: [_jsx(Button, { isRegularButton: true, type: "button", onClick: handleUploadClick, disabled: !formik.dirty || formik.isSubmitting, children: "Upload Photo" }), _jsx("input", { id: "photo-upload", name: "photoLink", type: "file", onChange: handleFileChange, style: { display: "none" }, accept: "image/*", multiple: true, value: formik.values.photoLink })] }), fileNames.length > 0 && (_jsxs("div", { style: { padding: "10px" }, children: [_jsx("strong", { children: "Uploaded Photo:" }), _jsx("ul", { children: fileNames.map((fileName, index) => (_jsx("li", { children: fileName }, index))) })] })), _jsx(ButtonWraper, { children: _jsx(Button, { isRegularButton: true, disabled: !formik.dirty || formik.isSubmitting, children: "Send" }) })] }) }));
}
export default CreatePostForm;
