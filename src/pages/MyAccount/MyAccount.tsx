import { PageWrapper } from "./styles"
import Account from "components/Account/Account"

function MyAccount () {
    return (
        <>
        <PageWrapper><Account onSubmit={() => {}}/></PageWrapper>
        </>
    )
}

export default MyAccount