import Input from "components/Input/input"
import Button from "components/Button/Button"

import { StyledSignInForm, StyledLable, ButtonWraper } from "components/SignInForm/styles"
import { SignInFormProps } from "components/SignInForm/types"

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
