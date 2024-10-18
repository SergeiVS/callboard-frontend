import { PostCardProps } from "./types"
import {
  StyledPostCard,
  StyledImage,
  StyledInfo,
  StyledTitle,
  StyledPrice,
  StyledLocation,
  StyledTag,
  StyledTopTag,
  Wrapper
} from './styles';

function PostCard({ image, title, price, location, tag, isTop }: PostCardProps) {
    return (
        <StyledPostCard>
            <Wrapper>
                {isTop && <StyledTopTag>Help</StyledTopTag>}
                <StyledImage src={image} alt={title} />
                
                <StyledInfo>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledTag>{tag}</StyledTag>
                    <StyledLocation>{location}</StyledLocation>
                    <StyledPrice>{price}</StyledPrice>
                </StyledInfo>
            </Wrapper>
        </StyledPostCard>
    );
}

export default PostCard;
