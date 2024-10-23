import { useNavigate } from "react-router-dom"

import {
  StyledModal,
  StyledAlert,
  LayoutWrapper,
  Header,
  LogoDiv,
  LogoName,
  LogoImg,
  NavigationContainer,
  Link,
  Main,
  NavigationMenu,
  IconControl,
  Icon,
  Footer,
} from "./styles"

import myaccount from "assets/myaccount.png";
import myposts from "assets/myposts.png";
import newpost from "assets/createpost.png";

import { LayoutProps, PagesPaths } from "./types"
import logo from "assets/logo.png"
import Home from "pages/Home/Home"
import SignIn from "pages/SignIn/SignIn"
import SignUp from "pages/SignUp/SignUp"
import CreatePost from "pages/CreatePost/CreatePost"
import SignInForm from "components/SignInForm/SignInForm"
import PostCard from "components/PostCard/PostCard"
import CloseIcon from "@mui/icons-material/Close"
import { useEffect, useState } from "react"
import { alertSelectors, alertActions } from "store/redux/alertSlice/AlertSlice"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { IconButton } from "@mui/material"
// import useAlert from "hooks/useAlert"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [modalOpen, setModalOpen] = useState(false)

  const isModalOpen = useAppSelector(alertSelectors.isOpen)
  const severity = useAppSelector(alertSelectors.severity)
  const message = useAppSelector(alertSelectors.cildren)

  // const { open } = useAlert()

  useEffect(() => {
    if (isModalOpen) {
      setModalOpen(true)
    } else {
      // dispatch(alertActions.closeAlert())
      setModalOpen(false)
    }
  }, [isModalOpen])

  const closeModal = () => {
    setModalOpen(false)
    dispatch(alertActions.closeAlert())
  }

  const goToHomePage = () => {
    navigate(PagesPaths.HOME)
  }

  return (
    <LayoutWrapper>
      <StyledModal open={modalOpen} onClose={closeModal}>
        <StyledAlert severity={severity}>
          {message}
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </StyledAlert>
      </StyledModal>

      <Header>
        <LogoDiv onClick={goToHomePage}>
          <LogoImg src={logo}></LogoImg>
          <LogoName>Help a hand</LogoName>
        </LogoDiv>
        <NavigationContainer>
          <Link
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.ALLPOSTS}
          >
            All Posts
          </Link>
          <Link
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.SIGNIN}
          >
            Sign In
          </Link>
          <Link
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.SIGNUP}
          >
            Sign Up
          </Link>
        </NavigationContainer>
      </Header>
      <Main>
        {children}
        <NavigationMenu>
          <Link
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.MYACCOUNT}
          >
            <IconControl>
              <Icon src={myaccount} />
            </IconControl>
            <p>My Account</p>
          </Link>
          <Link
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.MYPOSTS}
          >
            <IconControl><Icon src={myposts}/></IconControl>
            My Posts
          </Link>
          <Link
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.CREATEPOST}
          >
            <IconControl><Icon src={newpost}/></IconControl>
            Create Post
          </Link>
        </NavigationMenu>
      </Main>
      <Footer>
        <p>Legal Stuff</p>
        <p>-</p>
        <p>Privacy Policy</p>
        <p>-</p>
        <p>Security</p>
        <p>-</p>
        <p>Website Accessibility</p>
        <p>-</p>
        <p>Manage Cookies</p>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
