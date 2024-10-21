import Input from "components/Input/input"
import Button from "components/Button/Button"

import { StyledAccount, StyledLable, ButtonContainer } from "./styles" 
import { SignInFormProps } from "components/SignInForm/types"
import { useAppDispatch } from "store/hooks"
import { signInActions } from "store/redux/signInFormSlice/SignInFormSlice"

function Account() {
  const dispatch = useAppDispatch()

  return (
    <>
      <StyledAccount >
        <StyledLable>My Account</StyledLable>
        <Input name="firstname" placeholder="Firstname" onChange={() => {}} disabled  />
        <Input name="lastname" placeholder="Lastname" onChange={() => {}} disabled/>
        <Input name="phone-number" placeholder="Phone number" onChange={() => {}} disabled/>
        <Input name="email" placeholder="Email" onChange={() => {}} disabled/>
      </StyledAccount>
    </>
  )
}
export default Account
