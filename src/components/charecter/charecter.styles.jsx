import styled, {css} from "styled-components";

const commonStyles = css`
    position:absolute;
    width:100%;
    height:100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius:5%;
`

export const Overlay = styled.div`
    height:100%;
    width:100%;
    background:#080919;
    opacity:.7;
    position:absolute;
    border-radius:5%;
`

export const Container = styled.div`
    position: relative;
    width:250px;
    height:384px;
    border-radius:5%;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const Card = styled.div`
    position:absolute;
    border-radius:5%;
    height:100%;
    width:100%;
    box-shadow: 0 0 50px #000;
    transform-style:preserve-3d;
    transition: all 1.2s ease;
    @media screen and (min-width: 521px) {
        &:hover, &:active, &:focus{
        transform:rotateY(180deg)
    }
    &:hover ${Overlay}{
        transition: all 0.5s ease;
        opacity:0;
    }
    }
    
`

export const CardFront = styled.div`
    ${commonStyles}
    @media screen and (max-width: 520px) {
        transform:rotateY(180deg);
    }
`

export const CardBack = styled.div`
    ${commonStyles}
    @media screen and (min-width: 521px) {
        transform:rotateY(180deg);
    }
`

export const CardImage = styled.img`
    height: 100%;
    width:100%;
    border-radius:5%;
`