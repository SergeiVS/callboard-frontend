import * as Yup from "yup"
import { useFormik } from "formik"

import Input from "components/Input/input"
import Button from "components/Button/Button"

import { StyledLable, ButtonContainer, StyledForm } from "./styles"
import { LogIn } from "./types"
import { InputTypes } from "components/Input/types"
import { useAppDispatch } from "store/hooks"
import { signInActions } from "store/redux/SignInFormSlice"

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
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLable>Sign in</StyledLable>
        <Input
          name="email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type={InputTypes.EMAIL}
          error={formik.errors["email"]}
        />
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
    </>
  )
}
export default SignInForm
