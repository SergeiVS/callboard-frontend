import Input from "components/Input/input"
import Button from "components/Button/Button"

import { StyledSignInForm, StyledLable, ButtonWraper } from "./styles"
import { SignInFormProps } from "./types"

function SignInForm({ onSubmit }: SignInFormProps) {
  return (
    <>
      <StyledSignInForm onSubmit={onSubmit}>
        <StyledLable>Sign in</StyledLable>
        <Input placeholder="Email" onChange={() => {}} />
        <Input placeholder="Password" onChange={() => {}} />
        <ButtonWraper>
          <Button isRegularButton>Sign in</Button>
        </ButtonWraper>
      </StyledSignInForm>
    </>
  )
}
export default SignInForm
