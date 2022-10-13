import { Container, ProfileImage, ProfileContainer, StatsContainer, StatItem, MinusButton, ButtonPos, ProfileOverlay } from "./charecter-popUp-choice.styles";

function CharecterPopUp({theSrc, søvnT, søvnBehov, evneForbrug, setWrong}){
    function reduce(){
        setWrong(false)
    }

    return(
        <Container>
            <ProfileContainer>
                <ProfileImage src={theSrc} alt="vodof" />
                <ProfileOverlay />
            </ProfileContainer>
            <StatsContainer>
                <StatItem>Søvn Timer: {søvnT}</StatItem>
                <StatItem>Søvnbehov: {søvnBehov}</StatItem>
                <StatItem>Mulige brug af evne: {evneForbrug}</StatItem>
            </StatsContainer>
            <ButtonPos onClick={reduce} ><MinusButton><i class="fa-solid fa-minus"></i></MinusButton></ButtonPos>
        </Container>
    )
}

export default CharecterPopUp;