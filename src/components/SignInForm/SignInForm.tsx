import Input from "components/Input/input"
import Button from "components/Button/Button"


<<<<<<< HEAD
import { StyledLable, StyledSignInForm, ButtonWraper } from "components/SignInForm/styles"
import {SignInFormProps}from"components/SignInForm/types"
=======
import { StyledSignInForm, StyledLable, ButtonContainer } from "components/SignInForm/styles"
import { SignInFormProps } from "components/SignInForm/types"
>>>>>>> dbebac274d836df485fac01eae71b6ce48892dfc


function SignInForm({onSubmit}:SignInFormProps) {
  return (
    <>
      <StyledSignInForm onSubmit={onSubmit}>
        <StyledLable>Sign in</StyledLable>
        <Input label="Email" onChange={() => {}} />
        <Input label="Password" onChange={() => {}} />
        <ButtonContainer>
          <Button isRegularButton>Sign in</Button>
        </ButtonContainer>
      </StyledSignInForm>
    </>
  )
}
export default SignInForm
