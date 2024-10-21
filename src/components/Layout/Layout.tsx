import { useNavigate } from "react-router-dom"
import React, { useEffect } from "react"

import { LayoutWrapper, Header, LogoDiv, LogoName, LogoImg, NavigationContainer, Link, Main, NavigationMenu, IconControl, Icon, Footer} from "./styles"
import myaccount from "assets/myaccount.png";
import myposts from "assets/myposts.png";
import newpost from "assets/createpost.png";

import { LayoutProps, PagesPaths } from "./types"
import logo from "assets/logo.png"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { signInSelectors, signInActions } from "store/redux/SignInFormSlice"

function Layout({ children }: LayoutProps) {
  const dispatch = useAppDispatch()
  const isLoggedOn = useAppSelector(signInSelectors.isLoggedOn)


  useEffect(() => {
      dispatch(signInActions.getUser())
  }, [isLoggedOn])
  
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate(PagesPaths.HOME)
  }
  
    return (
      <LayoutWrapper>
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
            <IconControl><Icon src={myaccount}/></IconControl>
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
  