import Input from "components/Input/input"
import Button from "components/Button/Button"

import { StyledAccount, StyledLable, ButtonContainer } from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { signInSelectors } from "store/redux/signInFormSlice/SignInFormSlice"

function Account() {
  const dispatch = useAppDispatch()
  const firstName =
    useAppSelector(signInSelectors.user) !== undefined
      ? useAppSelector(signInSelectors.user)?.firstName
      : "First name"

  const lastName =
    useAppSelector(signInSelectors.user) !== undefined
      ? useAppSelector(signInSelectors.user)?.lastName
      : "Last name"

  const phoneNumber =
    useAppSelector(signInSelectors.user) !== undefined
      ? useAppSelector(signInSelectors.user)?.phoneNumber
      : "Phone number"

  const email =
    useAppSelector(signInSelectors.user) !== undefined
      ? useAppSelector(signInSelectors.user)?.email
      : "email"

  return (
    <>
      <StyledAccount>
        <StyledLable>My Account</StyledLable>
        <Input
          name="firstname"
          value={firstName}
          onChange={() => {}}
          disabled
        />
        <Input name="lastname" value={lastName} onChange={() => {}} disabled />
        <Input
          name="phone-number"
          value={phoneNumber}
          onChange={() => {}}
          disabled
        />
        <Input name="email" value={email} onChange={() => {}} disabled />
      </StyledAccount>
    </>
  )
}

export default Account
