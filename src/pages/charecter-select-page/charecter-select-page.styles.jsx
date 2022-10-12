import styled from "styled-components";

export const Dash = styled.div`
@media screen and (min-width: 1315px) {
    transition: all 0.5s ease;
    display:grid;
    grid-template-columns:0.1fr 0.1fr 0.1fr 0.1fr 0.1fr 0.1fr;
    grid-gap:16px;
    justify-content: center;
    text-decoration: none;
    padding-top: 30px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    left:8.5%;
    top:200px;
  }
  @media screen and (max-width: 1315px) and (min-width: 785px) {
    transition: all 0.5s ease;
    display:grid;
    grid-template-columns:0.1fr 0.1fr 0.1fr;
    grid-gap:16px;
    justify-content: center;
    text-decoration: none;
    padding-top: 50px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    left:8.5%;
    top:200px;
  }
  @media screen and (max-width: 785px)and (min-width: 520px) {
    transition: all 0.5s ease;
    display:grid;
    grid-template-columns:0.1fr 0.1fr;
    grid-gap:16px;
    justify-content: center;
    text-decoration: none;
    padding-top: 50px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    left:8.5%;
    top:200px;
  }
  @media screen and (max-width: 520px) {
    transition: all 0.5s ease;
    display:grid;
    grid-template-columns:0.1fr;
    grid-gap:16px;
    justify-content: center;
    text-decoration: none;
    padding-top: 50px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    left:8.5%;
    top:200px;
  }
`

export const ButtonPos = styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding-top: 50px;
height: 100%;
width: 100%;
border: none;
outline: none;
`