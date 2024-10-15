import Input from "components/Input/input"
import Button from "components/Button/Button"

import { StyledSignInForm, StyledLable, ButtonContainer } from "./styles"
import { SignInFormProps } from "./types"
import {InputTypes}from "components/Input/types"

function SignInForm({ onSubmit }: SignInFormProps) {
  return (
    <>
      <StyledSignInForm onSubmit={onSubmit}>
        <StyledLable>Sign in</StyledLable>
        <Input label="Email" onChange={() => {}} type={InputTypes.EMAIL}/>
        <Input label="Password" onChange={() => {}} type={InputTypes.PASSWORD}/>
        <ButtonContainer>
          <Button isRegularButton>Sign in</Button>
        </ButtonContainer>
      </StyledSignInForm>
    </>
  )
}
export default SignInForm
