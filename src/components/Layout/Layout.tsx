import { useNavigate } from "react-router-dom"

import { LayoutWrapper, Header, LogoDiv, LogoName, LogoImg, NavigationContainer, Link, Main, NavigationMenu, LinkControl, NavigationMenuIconControl, Icon, Footer} from "./styles"
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

function Layout({ children }: LayoutProps) {
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
            <LinkControl><Link
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.MYACCOUNT}
          >
            <NavigationMenuIconControl><Icon src={myaccount}/></NavigationMenuIconControl>
            My Account
          </Link></LinkControl>
          <Link
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.MYPOSTS}
          >
            My Posts
          </Link>
          <Link
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={PagesPaths.CREATEPOST}
          >
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
  