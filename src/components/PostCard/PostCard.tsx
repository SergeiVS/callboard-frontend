import React from "react";
import { PostCardProps } from "./types";
import {
  StyledPostCardWrapper,
  ImageWrapper,
  InfoWrapper,
  Title,
  Description,
  Tag,
} from "./styles";

function PostCard({ image, header, description, tag }: PostCardProps) {
  return (
    <StyledPostCardWrapper>
      <ImageWrapper>
        <img src={image} alt={header} style={{ width: "100px", height: "auto" }} />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{header}</Title>
        <Tag>{tag}</Tag>
        <Description>{description}</Description>
      </InfoWrapper>
    </StyledPostCardWrapper>
  );
}

export default PostCard;