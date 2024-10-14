import { PageWrapper } from "./styles";

import SignUpForm from "components/SingUpForm/SignUpForm";

function SignUp () {
    return(
        <><PageWrapper><SignUpForm onSubmit={() => {}}/></PageWrapper>
        </>
    )
    
}

export default SignUp