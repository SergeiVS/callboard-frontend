import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { PageWrapper } from "./styles";
import Account from "components/Account/Account";
function MyAccount() {
    return (_jsx(_Fragment, { children: _jsx(PageWrapper, { children: _jsx(Account, {}) }) }));
}
export default MyAccount;
