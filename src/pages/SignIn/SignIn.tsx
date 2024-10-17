import SignInForm from "components/SignInForm/SignInForm"

import { PageWrapper } from "./styles"

function SignIn() {
  //     const dispatch = useAppDispatch()
  // const logIn = ()=>{dispatch(signInActions.login())}

  return (
    <>
      <PageWrapper>
        <SignInForm />
      </PageWrapper>
    </>
  )
}

export default SignIn
