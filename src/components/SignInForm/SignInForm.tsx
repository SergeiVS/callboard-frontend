import * as Yup from "yup"
import { useFormik } from "formik"
import { Form } from "formik"
import { FormControl, InputLabel, TextField } from "@mui/material"

import Input from "components/Input/input"
import Button from "components/Button/Button"

import {
  StyledSignInForm,
  StyledLable,
  ButtonContainer,
  StyledForm,
} from "./styles"
import { SignInFormProps, LogIn } from "./types"
import { InputTypes } from "components/Input/types"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { signInActions, signInSelectors } from "store/redux/SignInFormSlice"
import { FormsCss } from "styles/CommonCss"

function SignInForm() {
  const dispatch = useAppDispatch()

  const validationSchema = Yup.object().shape({
    ["email"]: Yup.string().required("Email is missing"),
    ["password"]: Yup.string().required("Password is missing"),
  })

  const formik = useFormik({
    initialValues: { ["email"]: "", ["password"]: "" },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      let login: LogIn = { email: values.email, password: values.password }
      console.log(login)
      dispatch(signInActions.login(login))
      helpers.resetForm()
    },
  })

  return (
    <>
      {/* <StyledSignInForm > */}
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLable>Sign in</StyledLable>
        {/* <TextField
          name="email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type={InputTypes.EMAIL}
        /> */}
        <Input
          name="email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type={InputTypes.EMAIL}
          error={formik.errors["email"]}
        />

        {/* <TextField
          name="password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type={InputTypes.PASSWORD}
        /> */}

        <Input
          name="password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type={InputTypes.PASSWORD}
          error={formik.errors["password"]}
        />
        <ButtonContainer>
          <Button isRegularButton>Sign in</Button>
        </ButtonContainer>
      </StyledForm>
      {/* </StyledSignInForm> */}
    </>
  )
}
export default SignInForm
