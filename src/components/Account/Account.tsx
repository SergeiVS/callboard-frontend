import Input from "components/Input/input"
import Button from "components/Button/Button"

import { StyledAccount, StyledLable, ButtonContainer } from "./styles" 
import { SignInFormProps } from "components/SignInForm/types"

function Account({ onSubmit }: SignInFormProps) {
  return (
    <>
      <StyledAccount onSubmit={onSubmit}>
        <StyledLable>Sign in</StyledLable>
        <Input placeholder="Firstname" onChange={() => {}} disabled/>
        <Input placeholder="Lastname" onChange={() => {}} />
        <Input placeholder="Phone number" onChange={() => {}} />
        <Input placeholder="Email" onChange={() => {}} />
        <Input placeholder="Password" onChange={() => {}} />
        <ButtonContainer>
          <Button isRegularButton>Sign Up</Button>
        </ButtonContainer>
      </StyledAccount>
    </>
  )
}
export default Account
