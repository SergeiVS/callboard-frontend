import {
  LayoutWrapper,
  Header,
  LogoDiv,
  LogoName,
  LogoImg,
  NavigationContainer,
  Link,
  Main,
  Footer,
} from "./styles"

import { LayoutProps, PagesPaths } from "./types"
import logo from "assets/logo.png"
import Home from "pages/Home/Home"
import SignIn from "pages/SignIn/SignIn"
import SignUp from "pages/SignUp/SignUp"
import CreatePost from "pages/CreatePost/CreatePost"
import SignInForm from "components/SignInForm/SignInForm"

function Layout({ children }: LayoutProps) {
  // const examplePost = {
  //   headline: "Помощь с переездом ",
  //   description: "Ищу человека с грузовиком для помощи с переездом в другой город.",
  //   contactInfo: "Имя: Иван, Email: ivan@example.com",
  //   image: 'http://localhost:5173/home/src/assets/logo.png',
  //   help:"Need Help",
  // };
  return (
    <LayoutWrapper>
      <Header>
        <LogoDiv onClick={() => {}}>
          <LogoImg src={logo}></LogoImg>
          <LogoName>Help a hand</LogoName>
        </LogoDiv>
        {/* <NavigationContainer>
            
          </NavigationContainer> */}
        </Header>
        <Main>
          {/* <CreatePost/> */}
          <SignInForm/>
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
  