import styled from "styled-components";
import {motion} from "framer-motion";

export const MainBannerBox = styled.div`
    background-image: url('${(props)=>props.url}');
    width: 100%;
    height: 60vh;
    background-position: center;
    background-position-y: -800px;
    background-repeat: no-repeat;
    position: relative;
    opacity: 0.6;
    z-index: -1;
`

export const BannerText = styled.div`
    font-weight: 900;
    font-size: 3rem;
    position: absolute;
    color: black;
    width: 100%;
    @media(max-width: 450px) {
        font-size: 1.5rem;
    }
`