import { PageWrapper, AboutUs, AboutUsTitle, AboutUsText, Picture, ButtonContainer, ColoredContainer, PictureControl} from "./styles";

import Button from "components/Button/Button";
import picture from "assets/aboutusimage.jpg";



function Home () {
   return ( 
   <>
   <ColoredContainer></ColoredContainer>
    <PageWrapper>
        <AboutUs>  
            <AboutUsTitle>Lorem ipsum dolor sit amet.</AboutUsTitle>
            <AboutUsText>At vero eos et accusam et justo duo dolores et ea rebum. 
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
              no sea takimata sanctus est Lorem ipsum dolor sit amet.</AboutUsText>
            <ButtonContainer><Button isRegularButton>Sign In</Button></ButtonContainer>
        </AboutUs>
        <PictureControl>
        <Picture src={picture}></Picture>
        </PictureControl>
    </PageWrapper>
    </>
  )
}

export default Home
