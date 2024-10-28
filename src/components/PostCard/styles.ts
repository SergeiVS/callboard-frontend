import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const StyledPostCardWrapper = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 800px;
  background-color: white;
`;

export const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  margin-right: 16px;
`;

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 1.5em;
  margin: 0 0 8px 0;
`;

export const Tag = styled.span`
  background-color: #f3f3f3;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9em;
  color: #333;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 1.1em;
  margin: 0;
`;