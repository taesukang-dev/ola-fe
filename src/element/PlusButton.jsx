import styled from "styled-components";
import {motion} from "framer-motion";

const PlusButton = (props) => {
    const {
        children,
        margin,
        padding,
        bg,
        width,
        _onClick,
        color,
        type,
        height,
        warn
    } = props

    const styles = {margin, padding, bg, width, color, height, warn}

    return (
        <>
            <ButtonBox
                onClick={() => _onClick()}
                whileHover={{ scale: 1.1, }}
                whileTap={{ scale: 0.9 }}
               {...styles}
            >
                {children}
            </ButtonBox>
        </>
    )

}

const ButtonBox = styled(motion.button)`
    border-radius: 10px;
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    background: ${(props) => props.bg !== "false" ? props.bg : "white"};
    color: ${(props) => props.color ? props.color : "#304458"};
    font-size: 16px;
    border: ${(props) => props.warn === "true" ? "1px solid #c4302b" : "1px solid #ABABAB"};
    cursor: pointer;
`


export default PlusButton