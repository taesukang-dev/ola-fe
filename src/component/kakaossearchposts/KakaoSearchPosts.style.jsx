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

export const Title = styled.a`
    color: black;
    &: hover {
        color: blue;
    }
    display: flex;
    align-items: center;
    border-bottom: 1px solid #808080;
    margin: 10px 0px;
`

export const ImgBox = styled.img`
    width: 50px;
    height: 50px;
`