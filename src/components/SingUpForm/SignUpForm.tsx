import Input from "components/Input/input"
import Button from "components/Button/Button"

import { StyledSignUpForm, StyledLable, ButtonContainer } from "./styles" 
import { SignInFormProps } from "components/SignInForm/types"

function SignUpForm() {
  return (
    <>
      <StyledSignUpForm onSubmit={()=>{}}>
        <StyledLable>Sign in</StyledLable>
        <Input name="firstname" placeholder="Firstname" onChange={() => {}} />
        <Input name="lastname" placeholder="Lastname" onChange={() => {}} />
        <Input name="phone-number" placeholder="Phone number" onChange={() => {}} />
        <Input name="email" placeholder="Email" onChange={() => {}} />
        <Input name="password" placeholder="Password" onChange={() => {}} />
        <ButtonContainer>
          <Button isRegularButton>Sign Up</Button>
        </ButtonContainer>
      </StyledSignUpForm>
    </>
  )
}
export default SignUpForm
