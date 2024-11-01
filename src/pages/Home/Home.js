import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { PageWrapper, AboutUs, AboutUsTitle, AboutUsText, Picture, ButtonContainer, PictureControl, } from "./styles";
import Button from "components/Button/Button";
import picture from "assets/aboutusimage.jpg";
function Home() {
    const navigate = useNavigate();
    const goToSignIN = () => {
        navigate("/signin");
    };
    return (_jsx(_Fragment, { children: _jsxs(PageWrapper, { children: [_jsxs(AboutUs, { children: [_jsx(AboutUsTitle, { children: "Lorem ipsum dolor sit amet." }), _jsx(AboutUsText, { children: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." }), _jsx(ButtonContainer, { children: _jsx(Button, { isRegularButton: true, onClick: goToSignIN, children: "Sign In" }) })] }), _jsx(PictureControl, { children: _jsx(Picture, { src: picture }) })] }) }));
}
export default Home;
