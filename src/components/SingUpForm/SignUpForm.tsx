import Input from "components/Input/input"
import Button from "components/Button/Button"

import { StyledSignUpForm, StyledLable, ButtonContainer } from "./styles" 
import { SignInFormProps } from "components/SignInForm/types"

function SignUpForm({ onSubmit }: SignInFormProps) {
  return (
    <>
      <StyledSignUpForm onSubmit={()=>{}}>
        <StyledLable>Sign in</StyledLable>
        <Input placeholder="Firstname" onChange={() => {}} />
        <Input placeholder="Lastname" onChange={() => {}} />
        <Input placeholder="Phone number" onChange={() => {}} />
        <Input placeholder="Email" onChange={() => {}} />
        <Input placeholder="Password" onChange={() => {}} />
        <ButtonContainer>
          <Button isRegularButton>Sign Up</Button>
        </ButtonContainer>
      </StyledSignUpForm>
    </>
  )
}
export default SignUpForm
