import Input from "components/Input/input"
import Button from "components/Button/Button"

import { StyledAccount, StyledLable, ButtonContainer } from "./styles" 
import { SignInFormProps } from "components/SignInForm/types"

function Account() {
  return (
    <>
      <StyledAccount >
        <StyledLable>Sign in</StyledLable>
        <Input name="firstname" placeholder="Firstname" onChange={() => {}} disabled/>
        <Input name="lastname" placeholder="Lastname" onChange={() => {}} disabled/>
        <Input name="phone-number" placeholder="Phone number" onChange={() => {}} disabled/>
        <Input name="email" placeholder="Email" onChange={() => {}} disabled/>
        <Input name="password" placeholder="Password" onChange={() => {}} disabled/>
      </StyledAccount>
    </>
  )
}
export default Account
