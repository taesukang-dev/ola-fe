import styled from "styled-components";
import {motion} from "framer-motion";

const Button = (props) => {
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
        warn,
        bold
    } = props

    const styles = {margin, padding, bg, width, color, height, warn, bold}

    return (
        <>
            <ButtonBox type={type} onClick={_onClick} {...styles}
                       whileHover={{scale: 1.1,}}>
                {children}
            </ButtonBox>
        </>
    )
}

Button.defaultProps = {
    children: false,
    warn: "false",
    margin: "",
    padding: "",
    width: "",
    bg: "false",
    color: "",
    height: "",
    bold: "false"
}

const ButtonBox = styled(motion.button)`
    border-radius: 5px;
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    background: ${(props) => props.bg !== "false" ? props.bg : "white"};
    color: ${(props) => props.color ? props.color : "#304458"};
    font-size: 16px;
    border: ${(props) => props.warn === "true" ? "1px solid #c4302b" : "1px solid #ABABAB"};
    cursor: pointer;
    font-weight: ${(props) => props.bold === "true"? "700" : "400"}
`

export default Button