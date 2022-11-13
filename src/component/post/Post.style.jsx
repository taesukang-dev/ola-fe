import styled from "styled-components";

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

export const RegisterBox = styled.div`
    @media(max-width: 450px) {
        display: none;
    }
`
export const MemberContainer = styled.div`
    background: #fff;
    padding: 16px;
`

export const MemberBox = styled.div`
    width: 30px;
    height: 30px;
    background: black;
    border-radius: 50%;
    margin: 10px 0px;
    background-image: url('${props => props.url}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px 30px;
`

export const MemberCountBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
`

export const MemberCardBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const MemberCard = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 12px;
`