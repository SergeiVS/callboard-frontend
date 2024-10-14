import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  min-height: 500px;
  margin-top: -450px;;
  justify-content: left;
  padding-left: 130px;
  gap: 50px;
`

export const ColoredContainer = styled.div`
 height: 500px;
 background-color: ${colors.LIGHTBLUE};
`

export const AboutUs = styled.div `
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 40%;
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
export const PictureControl = styled.div`
  width: 800px;
`

export const Picture = styled.img `
  width: 100%;
`

export const ButtonContainer = styled.div`
 width: 100px;
`