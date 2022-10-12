import TitleLogo from "../../images/Title_logo.png"
import { LogoImage, Container, ExtraText } from "./title.styles";

function Title({pText}){
    return(
        <Container>
            <LogoImage src={TitleLogo} alt="Don't Pass Out"/>
            <ExtraText>{pText}</ExtraText>
        </Container>
    )
}

export default Title;