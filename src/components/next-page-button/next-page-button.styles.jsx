import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkContainer = styled.nav`
    background-color: ${(props) => props.isActive === "True" ? "#524FED"  : "#191a30"};
    height:60px;
    width:120px;
    border-radius:10px;
    margin-bottom:80px;
    box-shadow: 0 0 50px #000;
    @media screen and (min-width: 520px) {
        &:hover{
       transition: all 0.5s ease;
       opacity:60%;
   }
     }
`
export const ActiveLink = styled(Link)`
    color: ${(props) => props.isActive === "True" ? "#fff " : "#b8b8dd"};
    text-decoration:None;
    font-size:20px;
    font-family: 'Ubuntu', sans-serif;
    font-weight:500;
    text-align:center;
    line-height:60px;
    height:60px;
    width:120px;
    pointer-events: ${(props) => props.isActive === "False" ? "none" : ""}
    
`