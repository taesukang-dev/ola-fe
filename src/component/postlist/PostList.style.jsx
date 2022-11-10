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
    padding: 10px;
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
