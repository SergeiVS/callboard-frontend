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
        <Input placeholder="Lastname" onChange={() => {}} disabled/>
        <Input placeholder="Phone number" onChange={() => {}} disabled/>
        <Input placeholder="Email" onChange={() => {}} disabled/>
        <Input placeholder="Password" onChange={() => {}} disabled/>
      </StyledAccount>
    </>
  )
}
export default Account
