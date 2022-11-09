import Text from "./Text";
import styled from "styled-components";

const Input = (props) => {
    const { label, multiLine, placeholder, type, _onChange, disabled, value } = props;

    if (multiLine) {
        if (disabled) {
            return <GridBox>
                {label && <Text bold>{label}</Text>}
                <TextareaBox
                    rows={20}
                    placeholder={placeholder}
                    onChange={_onChange}
                    style={{background: "#fff"}}
                    disabled
                    value={value}
                >
                </TextareaBox>
            </GridBox>
        } else {
            return <GridBox>
                {label && <Text bold>{label}</Text>}
                <TextareaBox
                    rows={20}
                    placeholder={placeholder}
                    onChange={_onChange}
                >
                </TextareaBox>
            </GridBox>
        }
    }

    return(
        <GridBox>
            {label && <Text bold>{label}</Text>}
            {disabled &&
                <InputBox
                    style={{background: "#fff"}}
                    disabled={disabled} placeholder={placeholder} type={type} onChange={_onChange}
                    value={value}
                ></InputBox>
            }
            { !disabled &&
                <InputBox
                    placeholder={placeholder} type={type} onChange={_onChange}
                ></InputBox>
            }
        </GridBox>
    )
};

Input.defaultProps = {
    label: "",
    value: "",
    multiLine: false,
    disabled: false,
    placeholder: "",
    type: '',
    _onChange: () => {}
}

const GridBox = styled.div`
    text-align: left;
    width: 100%;
`

const InputBox = styled.input`
    border-radius: 5px;
    margin: 10px 0px;
    border: 1px solid #808080;
    width: 100%;
    padding: 10px 0px;
    box-sizing: border-box;
`;

const TextareaBox = styled.textarea`
    border-radius: 5px;
    margin: 10px 0px;
    color: black;
    border: 2px solid #808080;
    width: 100%;
    padding: 16px 10px;
    resize: none;
    box-sizing: border-box;
`

export default Input;