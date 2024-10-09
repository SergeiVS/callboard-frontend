import { PageWrapper, AboutUs, AboutUsTitle, AboutUsText, Picture } from "./styles";

import Button from "components/Button/Button";
import logo from "assets/aboutusimage.jpg"


function Home () {
   return ( 
   <>
    <PageWrapper>
        <AboutUs>
            <AboutUsTitle>Lorem ipsum dolor sit amet.</AboutUsTitle>
            <AboutUsText>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</AboutUsText>
            <Button onClick={() =>{}} disabled={false} isDeleteButton ={false}>Sign In</Button>
        </AboutUs>
    </PageWrapper>
    </>
   )
}

export default Home



