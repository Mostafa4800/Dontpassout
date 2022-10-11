import styled from "styled-components";

export const Container = styled.div`
    text-align:center;
    justify-content: center;
    align-items: center;
    list-style: none;
`

export const LogoImage = styled.img`
    
    @media screen and (max-width:500px) {
        transition: all 0.5s ease;
        width:400px;
        height:auto;
    }

    @media screen and (min-width:500px) and (max-width:750px) {
        transition: all 0.5s ease;
         width:520px;
        height:auto;
    }

    @media screen and (min-width: 750px){
        transition: all 0.5s ease;
        width:650px;
        height:auto
    }
`

export const ExtraText = styled.p`
    color:#bbb9e5;
    font-family: 'Ubuntu', sans-serif;
    position:relative;
    top:-15px;
`