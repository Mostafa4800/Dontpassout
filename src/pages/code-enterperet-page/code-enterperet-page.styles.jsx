import styled from "styled-components";


export const Container = styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding-top: 20px;
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

export const PopUpBackGround = styled.div`
    height: ${(props) => props.active === "active" ? "100%"  : "0"};
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(6, 7, 33, .8);
    overflow-x: hidden;
    transition: 0.5s;
    justify-content:center;
`

export const PopUpPos = styled.div`
    position:absolute;
    left:550px;
    top:100px;
`

export const PopUpPos2 = styled.div`
    position:absolute;
    left:550px;
    top:250px;
`

export const Text = styled.p`
    font-size:17px;
    position:absolute;
    color:#49aa7d;
    top:5px;
    left:110px;
`
export const Close = styled.span`
    font-size:40px;
    position:absolute;
    right:15px;
    top:-5px;

    &:hover{
        color:#2d2f66;
        cursor: pointer;
    }
`