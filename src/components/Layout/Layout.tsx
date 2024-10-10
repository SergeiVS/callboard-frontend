import { useNavigate } from "react-router-dom"

import Home from "pages/Home/Home"
import { LayoutWrapper, Header, LogoDiv, LogoName, LogoImg, NavigationContainer, Link, Main, Footer} from "./styles"

import { LayoutProps, PagesPaths } from "./types"
import logo from "assets/logo.png"

function Layout({ children }: LayoutProps) {
    // const navigate = useNavigate()
  
    // const goToHomePage = () => {
    //   navigate(PagesPaths.HOME)
    // }
  
    return (
      <LayoutWrapper>
        <Header>
          <LogoDiv onClick={()=>{}}>
            <LogoImg src={logo}></LogoImg>
            <LogoName>Help a hand</LogoName>
          </LogoDiv>
          {/* <NavigationContainer>
            <Link
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesPaths.HOME}
            >
              Home
            </Link>
            <Link
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesPaths.VIEWPOSTS}
            >
              Weathers
            </Link>
          </NavigationContainer> */}
        </Header>
        <Main><Home/></Main>
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
  