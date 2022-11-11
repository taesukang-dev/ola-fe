import {useLocation, useNavigate, useParams} from "react-router-dom";
import Input from "../../element/Input";
import * as s from './Update.style'
import Button from "../../element/Button";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {updatePost} from "../../shared/api/api";

const Update = () => {
    const navigate = useNavigate()
    const id = useParams().id
    const location = useLocation().state.data;
    const user = useSelector((state) => state.user)
    const [updateTitle, setUpdateTitle] = useState(location.title)
    const [updateContent, setUpdateContent] = useState(location.content)

    const {mutate} = useMutation((param) => updatePost(param), {
        onSuccess: (data) => navigate(`/detail/${id}`) })

    const updatePostMutate = () => {
        if (user.current !== location.user.userId) {
            alert("자신의 글만 수정할 수 있습니다.")
            return
        }
        if (updateTitle === location.title && updateContent === location.content) {
            alert('아무것도 수정하지 않았습니다.')
            return
        }
        mutate({
            id: id,
            title: updateTitle,
            content: updateContent
        });
    }

    return (
        <s.GridBox>
            <div style={{width: "80%"}}>
                <Input label={"작성자"} value={location.user.userId} disabled />
                <Input
                    label={"제목"}
                    defaultValue={location.title}
                    _onChange={(e) => setUpdateTitle(e.target.value)}
                />
                <Input
                    multiLine label={"내용"}
                    defaultValue={location.content}
                    _onChange={(e) => setUpdateContent(e.target.value)}
                />
            </div>
            <s.ButtonBox>
                <Button
                    type={"submit"} padding={"10px"}
                    _onClick={() => updatePostMutate()}
                >수정 완료</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                >목록</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default Update
