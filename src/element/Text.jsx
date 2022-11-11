import styled from "styled-components";

const Text = (props) => {
    const { children, fontSize, color, bold, padding } = props
    const styles = { fontSize, color, bold, padding }
    return(
        <>
            <TextBox {...styles}>{children}</TextBox>
        </>
    )
};

Text.defaultProps = {
    fontSize: '',
    color: '',
    bold: false
}

const TextBox = styled.p`
    color: ${(props) => props.color ? props.color : "#808080"};
    font-size: ${(props) => props.fontSize ? props.fontSize : "16px"};
    font-weight: ${(props) => props.bold ? "700" : "400"};
    padding: ${(props) => props.padding};
`

export default Text