import styled from "@emotion/styled"
import { NavLink, Link as SimpleLink} from "react-router-dom"

import { colors } from "styles/colors"

export const LayoutWrapper = styled.div`
display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.LIGHTBLUE};
  background-attachment: fixed;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  padding: 10px;
  gap: 10px;
  background-color: ${colors.BACKGROUND_BLUE};
  box-shadow: 0px 25px 20px -20px rgba(0,0,0,0.45);
  justify-content: space-between;
  padding-left: 85px;
  padding-right: 85px;
  align-items: center;
  `

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: fit-content;
  cursor: pointer;
`

export const LogoName = styled.p`
  color: ${colors.GREY};
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
`

export const LogoImg = styled.img`
  height: 40px;
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  width: fit-content;
  align-items: center;
`

export const Link = styled(NavLink)`
  color: ${colors.GREY};
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px;
`

export const Footer = styled.footer`
display: flex;
  width: 100%;
  height: 80px;
  padding-left: 40px;
  padding-right: 40px;
  gap: 20px;
  background-color: white;
  border-top: 1px solid black;
  justify-content: space-between;
  padding-left: 85px;
  padding-right: 85px;
  align-items: center;
`
