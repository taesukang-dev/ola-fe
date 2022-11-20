import styled from "styled-components";

export const WaitListBox = styled.div`
    position: relative;
    margin: 32px 0px;
`

export const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #f5f6f7;
`

export const MemberCardContainer = styled.div`
    padding: 16px;
    border: 1px solid #f5f6f7;
    border-radius: 0px 0px 10px 10px;
    height: 15vh;
    overflow: auto;
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