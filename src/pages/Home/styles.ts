import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 120px;
`

export const AboutUs = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 500px;
  max-height: fit-content;
  gap: 30px;
  background-color: ${colors.LIGHTBLUE};
`
export const AboutUsTitle = styled.h1`
  font-size: 32px;
  color: ${colors.GREY};
`

export const AboutUsText = styled.p`
  font-size: 16px;
  color: ${colors.GREY};
`

export const Picture = styled.img `
  height: 350px;
`

export const ButtonContainer = styled.div`
 width: 100px;
`