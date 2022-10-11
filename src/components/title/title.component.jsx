import TitleLogo from "../../images/Title_logo.png"
import { LogoImage, Container, ExtraText } from "./title.styles";

function Title({pText}){
    return(
        <Container>
            <div><LogoImage src={TitleLogo} alt="Don't Pass Out"/></div>
            <div><ExtraText>{pText}</ExtraText></div>
        </Container>
    )
}

export default Title;