import styled from "styled-components";

export const GridBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
    background: #fff;
`

export const TitleContainer = styled.div`
    background: #f5f6f7;
    padding: 16px;
`

export const TitleBox = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: space-between;
`

export const UserBox = styled.div`
    font-size: 12px;
`

export const ButtonBox = styled.div`
    display: flex;
`

export const RegisterBox = styled.div`
    @media(max-width: 450px) {
        display: none;
    }
`