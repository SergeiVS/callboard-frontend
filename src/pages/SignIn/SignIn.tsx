import SignInForm from "components/SignInForm/SignInForm"

import { PageWrapper } from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { signInActions, signInSelectors } from "store/redux/SignInFormSlice"

function SignIn() {
//     const dispatch = useAppDispatch()
// const logIn = ()=>{dispatch(signInActions.login())}

  return (
    <>
      <PageWrapper>
        <SignInForm onSubmit={() => {}} />
      </PageWrapper>
    </>
  )
}

export default SignIn
