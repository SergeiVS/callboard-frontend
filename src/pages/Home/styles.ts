import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  min-height: 500px;
  margin-top: -450px;;
  justify-content: left;
  padding-left: 130px;
`

export const ColoredContainer = styled.div`
 height: 500px;
 background-color: ${colors.LIGHTBLUE};
`


export const AboutUs = styled.div `
  display: flex;
  flex-direction: column;
  height: 500px;
  gap: 30px;
  padding-top: 30px;
`
export const AboutUsTitle = styled.h1`
  font-size: 42px;
  color: ${colors.GREY};
`

export const AboutUsText = styled.p`
  font-size: 22px;
  color: ${colors.GREY};
`

export const Picture = styled.img `
  width: 40%;
  padding-left: 200px;
`

export const ButtonContainer = styled.div`
 width: 100px;
`