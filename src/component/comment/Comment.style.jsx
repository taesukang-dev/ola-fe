import styled from "styled-components";

export const CommentContainer = styled.div`
    width: 80%;
`

export const CommentHeader = styled.div`
    padding: 16px; 
    background: #f5f6f7; 
    fontWeight: bold;  
`

export const InputBox = styled.div`
    display: grid; 
    grid-template-columns: 4fr 1fr;
    margin: 0px 0px 0px ${(props) => props.tab ? props.tab : 0}px;
`

export const CommentColumnHeader = styled.div`
    display: grid; 
    grid-template-columns: 1fr 4fr;
`

export const CommentColumnBox = styled.div`
    display: grid; 
    padding: 10px 0px;
    grid-template-columns: 1fr 3fr 1fr;
    border-bottom: 1px solid black;
    margin: 0px 0px 0px ${(props) => props.tab ? props.tab : 0}px;
`