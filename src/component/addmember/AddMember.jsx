import PlusButton from "../../element/PlusButton";
import styled from "styled-components";
import {useState} from "react";
import Button from "../../element/Button";

const AddMember = () => {
    const [modal, setModal] = useState(false)
    return (
        <ButtonContainer>
            <PlusButton
                padding={"10px"}
                bg={"white"}
                _onClick={() => setModal(!modal)}
            >참여</PlusButton>
            {
                modal &&
                <ConfirmModal>
                    <div style={{
                        color: "#fdfdfd",
                        fontWeight: "bold"
                    }}
                    >
                        팀에 참여하시겠어요?
                    </div>
                    <div>
                        <Button
                            bold={"true"}
                            padding={"10px"}>확인</Button>
                        <Button
                            _onClick={() => setModal(!modal)}
                            margin={"0px 0px 0px 10px"}
                            bold={"true"}
                            padding={"10px"}>취소</Button>
                    </div>
                </ConfirmModal>
            }
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    position: absolute;
    right: 0;
    cursor: pointer;
`

const ConfirmModal = styled.div`
    position: absolute;
    width: 15rem;
    height: 10rem;
    right: 0;
    background: #04cf5b;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
`

export default AddMember