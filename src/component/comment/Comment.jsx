import * as s from './Comment.style'
import Input from "../../element/Input";
import Button from "../../element/Button";
import {useRef, useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getComments, writeComment} from "../../shared/api/api";
import Text from "../../element/Text";
import Comments from "./Comments";

const Comment = ({postId, type}) => {
    const queryClient = useQueryClient()
    const inputRef = useRef()
    const [content, setContent] = useState('')
    const {mutate} = useMutation((content) => writeComment(postId, content), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('comments')
            inputRef.current.value = ''
        }})
    const { data } = useQuery(['comments'], () => getComments(postId))

    const writeMutate = () => {
        if (content.replace(/ /gi, '').length === 0) {
            alert("입력 후 작성 버튼을 눌러주세요.")
            return
        }
        mutate({content: content, type: type});
    }

    return (
        <s.CommentContainer>
            <s.CommentHeader>
                <Text bold color={"black"}>댓글</Text>
            </s.CommentHeader>
            <s.InputBox>
                <Input
                    _onChange={(e) => setContent(e.target.value)}
                    _ref={inputRef}
                />
                <Button
                    margin={"10px 0px"} padding={"10px"}
                    _onClick={() => writeMutate()}
                >작성</Button>
            </s.InputBox>
            <s.CommentColumnHeader>
                <Text>닉네임</Text>
                <Text>내용</Text>
            </s.CommentColumnHeader>
            { data && <Comments
                type={type}
                comment={data?.result}
                postId={postId}
            />}
        </s.CommentContainer>
    )
}

export default Comment