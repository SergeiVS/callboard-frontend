import { PageWrapper, AboutUs, AboutUsTitle, AboutUsText, Picture, ButtonContainer, ColoredContainer} from "./styles";

import Button from "components/Button/Button";
import picture from "assets/aboutusimage.jpg"


function Home () {
   return ( 
   <>
   <ColoredContainer></ColoredContainer>
    <PageWrapper>
        <AboutUs>  
            <AboutUsTitle>Lorem ipsum dolor sit amet.</AboutUsTitle>
            <AboutUsText>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</AboutUsText>
            <ButtonContainer><Button onClick={() =>{}} disabled={false} isDeleteButton ={false}>Sign In</Button></ButtonContainer>
        </AboutUs>
        <Picture src={picture}></Picture>
    </PageWrapper>
    </>
   )
}

export default Home



