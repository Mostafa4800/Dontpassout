import {Container, Card, CardFront, CardBack, CardImage, Overlay } from "./charecter.styles";

function CharecterCard({frontCard, backCard, AltText, charecterSelected, setCharecterSelected, dataId, isSelected}){
    
    function go(e){
        setCharecterSelected(
            charecterSelected.map((charecter) =>
              charecter.id === dataId ? { ...charecter, selected: !charecter.selected } : charecter
            )
        );
    };

    return(
        <Container dataId={dataId} onClick={go}>
            <Card>
                <CardFront><CardImage src={frontCard} alt={AltText}/></CardFront>
                <CardBack><CardImage src={backCard} alt={AltText}/></CardBack>
                {isSelected ? "" : <Overlay />}
            </Card>
        </Container>
    )
}

export default CharecterCard;