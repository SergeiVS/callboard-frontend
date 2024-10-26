import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Layout from "components/Layout/Layout";
import { PagesPaths } from "components/Layout/types";
import Home from "pages/Home/Home";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { signInSelectors, signInActions } from "store/redux/signInFormSlice/SignInFormSlice";
import SignIn from "pages/SignIn/SignIn";
import SignUp from "pages/SignUp/SignUp";
import CreatePost from "pages/CreatePost/CreatePost";
import MyAccount from "pages/MyAccount/MyAccount";
import AllPosts from "pages/AllPosts/AllPosts";
import MyPosts from "pages/MyPosts/MyPosts";
function App() {
    const dispatch = useAppDispatch();
    const isLoggedOn = useAppSelector(signInSelectors.isLoggedOn);
    useEffect(() => {
        dispatch(signInActions.getUser());
    }, [isLoggedOn]);
    return (_jsx(_Fragment, { children: _jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: PagesPaths.HOME, element: _jsx(Home, {}) }), _jsx(Route, { path: PagesPaths.SIGNIN, element: _jsx(SignIn, {}) }), _jsx(Route, { path: PagesPaths.SIGNUP, element: _jsx(SignUp, {}) }), _jsx(Route, { path: PagesPaths.CREATEPOST, element: _jsx(CreatePost, {}) }), _jsx(Route, { path: PagesPaths.MYACCOUNT, element: _jsx(MyAccount, {}) }), _jsx(Route, { path: PagesPaths.ALLPOSTS, element: _jsx(AllPosts, {}) }), _jsx(Route, { path: PagesPaths.MYPOSTS, element: _jsx(MyPosts, {}) })] }) }) }));
}
export default App;
