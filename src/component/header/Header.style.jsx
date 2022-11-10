import styled from "styled-components";

export const GridBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 1px;
    background: white;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
`

export const SideBox = styled.div`
    display: flex;
    padding: 10px;
`

export const LogoBox = styled.div`
    padding: 22px;
`

export const MenuContainer = styled.div`
    position: fixed;
    top: 63px;
    background: white;
    width: 150px;
`

export const MenuBox = styled.div`
    border-bottom: 1px solid black;
    padding: 10px;
    color: #808080;
    &: hover{
        color: #1b29f7;
        cursor: pointer;
        border-bottom: 1px solid #1b29f7;
    }
`

export const AlarmBox = styled.div`
    position: relative;
`
