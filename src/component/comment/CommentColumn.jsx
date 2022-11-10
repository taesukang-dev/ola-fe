import * as s from "./Comment.style";
import Input from "../../element/Input";
import Button from "../../element/Button";
import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteComment, writeCommentWithParent} from "../../shared/api/api";
import {useSelector} from "react-redux";

const CommentColumn = ({postId, commentId, childs, tab, username, nickname, content, parent, type}) => {
    const queryClient = useQueryClient()
    const user = useSelector((state) => state.user)
    const [commentContent, setCommentContent] = useState('')
    const [reply, setReply] = useState(false)

    const deleteMutation = useMutation(() => deleteComment(postId, commentId), {
        onSuccess: (data) => queryClient.invalidateQueries('comments')})

    const {mutate} = useMutation(() => writeCommentWithParent(postId, commentId, {content: commentContent, type: type}), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('comments')
            setReply(false)
        }})

    const commentWithParentMutate = () => {
        if (commentContent === '') {
            alert('댓글을 입력하세요.')
            return
        }
        mutate()
    }

    return (
        <>
            <s.CommentColumnBox
                tab={tab}
                onClick={() => setReply(!reply)}
            >
                <div>{nickname}</div>
                <div>{content}</div>
                {
                    user.current === username &&
                    <Button _onClick={(e) => {
                        e.stopPropagation()
                        deleteMutation.mutate()
                    }}>삭제</Button>
                }
            </s.CommentColumnBox>
            {
                parent &&
                reply &&
                <s.InputBox tab={tab}>
                    <Input
                        _onChange={(e) => setCommentContent(e.target.value)}
                    />
                    <Button
                        margin={"10px 0px"} padding={"10px"}
                        _onClick={() => commentWithParentMutate()}
                    >작성</Button>
                </s.InputBox>
            }

            {
                childs &&
                childs.map((e, i) => <CommentColumn
                                        key={i} tab={tab + 20}
                                        postId={postId}
                                        commentId={e.id}
                                        nickname={e.nickname}
                                        username={e.username}
                                        content={e.content}
                                    />)
            }
        </>
    )
}
export default CommentColumn