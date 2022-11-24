import styled from "styled-components";
import {motion} from "framer-motion";

export const GridContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const GridBox = styled.div`
    width: 80%;
    text-align: left;
    margin: 10px 0px;
`

export const TitleBox = styled(motion.div)`
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    text-decoration: #04cf5d wavy underline;
`

export const Text = styled(motion.p)`
    color: #808080;
    font-weight: bold;
`

export const TeamPostColumn = styled(motion.div)`
    display: grid;
    grid-template-columns: 0.5fr 3fr 1fr 1fr;
    padding: 10px;
    border-bottom: 1px solid black;
   &: hover{
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(151,151,187,1) 35%, rgba(0,212,255,1) 100%);
        color: white;
        font-weight: bold;
        cursor: pointer;
   }
   @media(max-width: 450px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
`

export const PostColumnBox = styled(motion.div)`
    display: grid;
    grid-template-columns: 0.5fr 1fr 3fr 1fr;
    padding: 10px;
    border-bottom: 1px solid black;
   &: hover{
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(151,151,187,1) 35%, rgba(0,212,255,1) 100%);
        color: white;
        font-weight: bold;
        cursor: pointer;
   }
   @media(max-width: 450px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
`

export const Column = styled.div`
    @media(max-width: 450px) {
        display: none;
    }
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 10px 0px;
`

export const CardBox = styled.div`
    width: 30%;
    border: 0.5px solid #A0A0A0;
    border-radius: 10px;
    @media(max-width: 770px) {
        width: 100%;
    }
    &: hover{
        cursor: pointer;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        scale: 1.1;
    }
`

export const CardTitleBox = styled.div`
    padding: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const CardPlaceBox = styled.div`
    padding: 10px;
    white-space:nowrap;
    text-overflow: ellipsis;
`

export const CardStatusBox = styled.div`
    font-weight: bold;
    padding: 10px;
    border-radius: 10px 10px 0px 0px;
    background: ${(props) => props.status
                                ? "#808080" :
                                props.warn ? "#D0312D" : "#04cf5b"};
    text-align: right;
`

export const Number = styled.p`
    color: white;
`