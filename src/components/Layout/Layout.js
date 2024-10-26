import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledModal, StyledAlert, LayoutWrapper, Header, LogoDiv, LogoName, LogoImg, NavigationContainer, Link, Main, NavigationMenu, IconControl, Icon, Footer, } from "./styles";
import myaccount from "assets/myaccount.png";
import myposts from "assets/myposts.png";
import newpost from "assets/createpost.png";
import { PagesPaths } from "./types";
import logo from "assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import { alertSelectors, alertActions } from "store/redux/alertSlice/AlertSlice";
import { signInActions, signInSelectors, } from "store/redux/signInFormSlice/SignInFormSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { IconButton } from "@mui/material";
function Layout({ children }) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLoggedOn = useAppSelector(signInSelectors.isLoggedOn);
    const [modalOpen, setModalOpen] = useState(false);
    const isModalOpen = useAppSelector(alertSelectors.isOpen);
    const severity = useAppSelector(alertSelectors.severity);
    const message = useAppSelector(alertSelectors.cildren);
    useEffect(() => {
        dispatch(signInActions.getUser());
    }, [isLoggedOn]);
    useEffect(() => {
        if (isModalOpen) {
            setModalOpen(true);
            setTimeout(() => dispatch(alertActions.closeAlert()), 5000);
        }
        else {
            setModalOpen(false);
        }
    }, [isModalOpen]);
    const closeModal = () => {
        setModalOpen(false);
        dispatch(alertActions.closeAlert());
    };
    const goToHomePage = () => {
        navigate(PagesPaths.HOME);
    };
    return (_jsxs(LayoutWrapper, { children: [_jsx(StyledModal, { open: modalOpen, onClose: closeModal, children: _jsxs(StyledAlert, { severity: severity, children: [message, _jsx(IconButton, { onClick: closeModal, children: _jsx(CloseIcon, {}) })] }) }), _jsxs(Header, { children: [_jsxs(LogoDiv, { onClick: goToHomePage, children: [_jsx(LogoImg, { src: logo }), _jsx(LogoName, { children: "Help a hand" })] }), _jsxs(NavigationContainer, { children: [_jsx(Link, { style: ({ isActive }) => ({
                                    textDecoration: isActive ? "underline" : "none",
                                }), to: PagesPaths.ALLPOSTS, children: "All Posts" }), _jsx(Link, { style: ({ isActive }) => ({
                                    textDecoration: isActive ? "underline" : "none",
                                }), to: PagesPaths.SIGNIN, children: "Sign In" }), _jsx(Link, { style: ({ isActive }) => ({
                                    textDecoration: isActive ? "underline" : "none",
                                }), to: PagesPaths.SIGNUP, children: "Sign Up" })] })] }), _jsxs(Main, { children: [children, _jsxs(NavigationMenu, { children: [_jsxs(Link, { style: ({ isActive }) => ({
                                    textDecoration: isActive ? "underline" : "none",
                                }), to: PagesPaths.MYACCOUNT, children: [_jsx(IconControl, { children: _jsx(Icon, { src: myaccount }) }), _jsx("p", { children: "My Account" })] }), _jsxs(Link, { style: ({ isActive }) => ({
                                    textDecoration: isActive ? "underline" : "none",
                                }), to: PagesPaths.MYPOSTS, children: [_jsx(IconControl, { children: _jsx(Icon, { src: myposts }) }), "My Posts"] }), _jsxs(Link, { style: ({ isActive }) => ({
                                    textDecoration: isActive ? "underline" : "none",
                                }), to: PagesPaths.CREATEPOST, children: [_jsx(IconControl, { children: _jsx(Icon, { src: newpost }) }), "Create Post"] })] })] }), _jsxs(Footer, { children: [_jsx("p", { children: "Legal Stuff" }), _jsx("p", { children: "-" }), _jsx("p", { children: "Privacy Policy" }), _jsx("p", { children: "-" }), _jsx("p", { children: "Security" }), _jsx("p", { children: "-" }), _jsx("p", { children: "Website Accessibility" }), _jsx("p", { children: "-" }), _jsx("p", { children: "Manage Cookies" })] })] }));
}
export default Layout;
