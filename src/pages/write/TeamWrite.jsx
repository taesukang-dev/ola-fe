import * as s from './Write.style'
import Input from "../../element/Input";
import Button from "../../element/Button";
import {useSelector} from "react-redux";
import Text from "../../element/Text";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {writeTeamPost} from "../../shared/api/api";
import {useNavigate} from "react-router-dom";

const TeamWrite = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [place, setPlace] = useState('')
    const [limits, setLimits] = useState('')

    const {mutate} = useMutation((param) => writeTeamPost(param), {
        onSuccess: (data) => navigate(`/detail/team/${data.result.id}`)
    })

    const writeTeamPostMutate = () => {
        if (title === '' || content === '' || place === '' || limits === '') {
            alert("입력을 확인해주세요.")
            return
        }
        mutate({
            title: title,
            content: content,
            place: place,
            limits: limits,
            username: user.current
        });
    }

    return (
        <s.GridBox>
            <div style={{width: "80%"}}>
                <Input label={"작성자"} value={user.current} disabled />
                <Input
                    label={"제목"}
                    _onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    label={"장소"}
                    _onChange={(e) => setPlace(e.target.value)}
                />
                <s.SelectContainer onChange={(e) => setLimits(e.target.value)}>
                    <Text bold>인원</Text>
                    <s.SelectBox >
                        <s.RadioBox>
                            <input type={"radio"} value={2} name={"limits"} />
                            <label htmlFor={"2"} style={{margin: "0px 0px 0px 10px"}}>2명</label>
                        </s.RadioBox>
                        <s.RadioBox>
                            <input type={"radio"} value={3} name={"limits"} />
                            <label htmlFor={'3'} style={{margin: "0px 0px 0px 10px"}}>3명</label>
                        </s.RadioBox>
                        <s.RadioBox>
                            <input type={"radio"} value={4} name={"limits"} />
                            <label htmlFor={'4'} style={{margin: "0px 0px 0px 10px"}}>4명</label>
                        </s.RadioBox>
                        <s.RadioBox>
                            <input type={"radio"} value={5} name={"limits"} />
                            <label htmlFor={'5'} style={{margin: "0px 0px 0px 10px"}}>5명</label>
                        </s.RadioBox>
                    </s.SelectBox>
                </s.SelectContainer>
                <Input
                    multiLine label={"내용"}
                    _onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <s.ButtonBox>
                <Button
                    type={"submit"} padding={"10px"}
                    _onClick={() => writeTeamPostMutate()}
                >작성</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                >목록</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default TeamWrite