import styled from "styled-components";

export const Container = styled.div`
    color:black;
    justify-content:left;
`

export const ProfileContainer = styled.div`
    width:55px;
    height:55px;
    overflow:hidden;
    margin:10px;
    display:inline-block;
`

export const StatsContainer = styled.div`
    font-family:"Segoe UI";
    display:inline-block;
    position: relative;
    top:-30px;
`

export const ProfileOverlay = styled.div`
    height:55px;
    width:55px;
    background:#080919;
    opacity:.4;
    position:relative;
    top:-58px;
    border-radius:100px;
`

export const ProfileImage = styled.img`
    border-radius:100%;
    width:100%;
    height:100%;
    object-fit:cover;
`

export const StatItem = styled.p`
    font-size:13px;
    display:inline-block;
    margin-right:10px;
`

export const ButtonPos = styled.div`
    position:relative;
    top:-24px;
    right:-20px;
    display:inline-block;
`

export const MinusButton = styled.button`
    border-radius:100px;
    height:30px;
    width:30px;
    text-align:center;
    background-color:#151532;
    color:white;
    border:none;
`