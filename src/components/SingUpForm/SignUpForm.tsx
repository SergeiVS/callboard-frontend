import Input from "components/Input/input"
import Button from "components/Button/Button"

import { StyledSignUpForm, StyledLable, ButtonContainer } from "./styles" 
import { SignInFormProps } from "components/SignInForm/types"

function SignUpForm() {
  return (
    <>
      <StyledSignUpForm onSubmit={()=>{}}>
        <StyledLable>Sign Up</StyledLable>
        <Input name="firstname" label="Firstname" onChange={() => {}} />
        <Input name="lastname" label="Lastname" onChange={() => {}} />
        <Input name="phone-number" label="Phone number" onChange={() => {}} />
        <Input name="email" label="Email" onChange={() => {}} />
        <Input name="password" label="Password" onChange={() => {}} />
        <ButtonContainer>
          <Button isRegularButton>Sign Up</Button>
        </ButtonContainer>
      </StyledSignUpForm>
    </>
  )
}
export default SignUpForm
