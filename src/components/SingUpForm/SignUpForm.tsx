import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

import Input from "components/Input/input"
import Button from "components/Button/Button"

import { alertActions } from "store/redux/alertSlice/AlertSlice"
import { PagesPaths } from "components/Layout/types"
import { StyledSignUpForm, StyledLable, ButtonContainer } from "./styles"
import axios from "axios"
import { InputTypes } from "components/Input/types"
import { useAppDispatch } from "store/hooks"
import { alertProps } from "components/Alert/types"

function SignUpForm() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is missing"),
    lastName: Yup.string().required("First name is missing"),
    email: Yup.string()
      .email("Data should be in email format")
      .required("Email is missing"),
    password: Yup.string().required("Password is missing").min(8),
  })

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
      const response = await axios
        .post("/api/auth/signing", {
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
          email: values.email,
          password: values.password,
        })
        .then(response => {
          let message = response.data.message
          navigate(PagesPaths.SIGNIN)
          helpers.resetForm()
          // let successProps: alertProps = {
          //   severity: "success",
          //   children: `${message}`,
          // }
          alert({message})
          // dispatch(alertActions.openAlert(successProps))
        })
        .catch(error => {
          alert(error)
          // let errorProps: alertProps = {
          //   severity: "info",
          //   children: `${error}`,
          // }
          // dispatch(alertActions.openAlert(errorProps))
        })
    },
  })

  return (
    <>
      <StyledSignUpForm onSubmit={formik.handleSubmit}>
        <StyledLable>Sign in</StyledLable>
        <Input
          name="firstName"
          label="Firstname"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <Input
          name="lastName"
          label="Lastname"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <Input
          name="phoneNumber"
          label="Phone number"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        <Input
          name="email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type={InputTypes.EMAIL}
        />
        <Input
          name="password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type={InputTypes.PASSWORD}
        />
        <ButtonContainer>
          <Button isRegularButton>Sign Up</Button>
        </ButtonContainer>
      </StyledSignUpForm>
    </>
  )
}
export default SignUpForm
