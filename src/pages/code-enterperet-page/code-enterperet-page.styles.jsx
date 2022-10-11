import styled from "styled-components";


export const Container = styled.div`
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

export const CodeInput = styled.input`
    height:40px;
    width:200px;
    font-size:20px;
    text-align:center;
    letter-spacing:20px;
    font-family:monospace;
    border-radius:5px;
    border:none;
    outline:5px #0e0f2b solid;
    background-color:#151532;
    color:#807fa3;
    box-shadow: 0 0 30px #000;
    font-family: 'Ubuntu', sans-serif;
    font-weight:500;

    -moz-appearance: textfield;
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }  
`



export const SubmitButton = styled.button`
    color:#fff;
    background-color: #524FED;
    position:absolute;
margin-top:150px;
    height:40px;
    width:100px;
    border-radius:10px;
    border:none;
    box-shadow: 0 0 50px #000;
    font-family: 'Ubuntu', sans-serif;
    font-weight:500;
    font-size:15px;

    &:active{
        transition: all 0.1s ease;
        height:35px;
        width:80px;
        font-size:12px;
        
    }
    &:hover{
        transition: all 0.5s ease;
        opacity:60%;
    }

`