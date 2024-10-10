import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 500px;
  justify-content: right;
  gap: 120px;
  padding-left: 120px;
  background-color: ${colors.LIGHTBLUE};
`

export const AboutUs = styled.div `
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  gap: 30px;
  
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
  height: 350px;
`

export const ButtonContainer = styled.div`
 width: 100px;
`