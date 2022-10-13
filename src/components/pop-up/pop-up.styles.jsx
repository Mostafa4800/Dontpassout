import styled from "styled-components";

 export const PopCard = styled.div`
     width: 500px;
     height:${(props) => props.height === "auto" ? "auto"  : "60px"};
     border-radius:16px;
     box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px 0px;
     font-family: 'Ubuntu', sans-serif;
     box-sizing: border-box;
     background-color:white;
     padding:6px 6px 16px;
     z-index:6;
     opacity:1;

`