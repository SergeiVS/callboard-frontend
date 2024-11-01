import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledPostCard, StyledHeader, StyledDescription, StyledContactInfo, StyledPostContainer, } from "./styles";
const PostCard = (props) => {
    const { headline, description, contactInfo, image } = props;
    return (_jsxs(StyledPostContainer, { children: [_jsx(StyledContactInfo, { children: _jsx("p", { children: contactInfo }) }), _jsxs(StyledPostCard, { children: [_jsx(StyledHeader, { children: headline }), _jsx("img", { src: image, alt: "Photo", style: { width: "100px", height: "auto" } }), _jsx(StyledDescription, { children: description })] })] }));
};
export default PostCard;
