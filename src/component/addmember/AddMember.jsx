import PlusButton from "../../element/PlusButton";
import styled from "styled-components";
import {useState} from "react";
import Button from "../../element/Button";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addMember} from "../../shared/api/api";
import {useSelector} from "react-redux";

const AddMember = ({id, userId, member}) => {
    const queryClient = useQueryClient()
    const user = useSelector((state) => state.user)
    const [modal, setModal] = useState(false)
    const {mutate} = useMutation((id) => addMember(id), {
        onSuccess: (data) => {
            alert('참여가 완료되었습니다.')
            queryClient.invalidateQueries('post')
            setModal(!modal)
        }
    })

    const addMemberMutate = () => {
        if (user.current === userId) {
            alert("자신의 모집에는 참가할 수 없습니다.")
            return
        }
        let flag = false
        member.filter(e => e.userId === user.current ? flag = true : flag)
        if (flag) {
            alert('이미 참가한 모집입니다.')
            return
        }
        mutate(id);
    }

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
                            padding={"10px"}
                            _onClick={() => addMemberMutate()}
                        >확인</Button>
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