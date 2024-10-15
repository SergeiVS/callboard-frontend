import { PageWrapper } from "./styles"

import SignInForm from "components/SignInForm/SignInForm"


function SignIn () {
    return (
        <>
        <PageWrapper><SignInForm onSubmit={() => {}}/></PageWrapper>
        </>
    )
}

export default SignIn