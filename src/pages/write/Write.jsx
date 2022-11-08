import * as s from './Write.style'
import Input from "../../element/Input";
import {useSelector} from "react-redux";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {write} from "../../shared/api/api";

const Write = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {mutate} = useMutation(() => write({
        title: title,
        content: content,
        username: user.current
    }), {
        onSuccess: (data) => {
            // TODO : detail 로 이동할 것
            console.log(data)
        }
    })

    const writeMutate = () => {
        if (title !== '' && content !== '') {
            mutate();
        } else {
            alert('입력을 확인해주세요.')
        }
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
                    multiLine label={"내용"}
                    _onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <s.ButtonBox>
                <Button
                    type={"submit"} padding={"10px"}
                    _onClick={() => writeMutate()}
                >작성</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                    _onClick={() => navigate('/')}
                >목록</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default Write