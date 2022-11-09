import * as s from './Comment.style'
import Input from "../../element/Input";
import Button from "../../element/Button";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useMutation, useQuery} from "@tanstack/react-query";
import {getComments, writeComment} from "../../shared/api/api";

const Comment = ({postId}) => {
    const user = useSelector((state) => state.user)
    const [content, setContent] = useState('')
    const {mutate} = useMutation((content) => writeComment(postId, content), {
        onSuccess: (data) => {
            console.log(data)
        }
    })
    useQuery(['comments'], () => getComments(postId), {
        onSuccess: (data) => {
            console.log(data)
        }
    })

    const writeMutate = () => {
        if (content === '') {
            alert("입력 후 작성 버튼을 눌러주세요.")
            return
        }
        mutate(content);
    }

    return (
        <s.CommentContainer>
            <s.CommentHeader>댓글</s.CommentHeader>
            <s.InputBox>
                <Input _onChange={(e) => setContent(e.target.value)}/>
                <Button
                    margin={"10px 0px"} padding={"10px"}
                    _onClick={() => writeMutate()}
                >작성</Button>
            </s.InputBox>
            <s.CommentColumn>
                <div>닉네임</div>
                <div>내용</div>
            </s.CommentColumn>
        </s.CommentContainer>
    )
}

export default Comment