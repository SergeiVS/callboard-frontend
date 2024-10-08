import { LayoutWrapper, Header, LogoDiv, LogoName, LogoImg, NavigationContainer, Link, Main, Footer} from "./styles"

import { LayoutProps, PagesPaths } from "./types"
import logo from "assets/logo.png"
import Home from "pages/Home/Home"

function Layout({ children }: LayoutProps) {

  
    return (
      <LayoutWrapper>
        <Header>
          <LogoDiv onClick={()=>{}}>
            <LogoImg src={logo}></LogoImg>
            <LogoName>Help a hand</LogoName>
          </LogoDiv>
          <NavigationContainer>
            
          </NavigationContainer>
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
  