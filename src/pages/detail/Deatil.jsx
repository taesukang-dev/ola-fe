import * as s from './Detail.style'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {deletePost, getPost} from "../../shared/api/api";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import Button from "../../element/Button";
import Post from "../../component/post/Post";
import Comment from "../../component/comment/Comment";
import {useSelector} from "react-redux";
import UnAuthComment from "../../component/comment/UnAuthComment";
import {useEffect} from "react";

const Detail = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const queryClient = useQueryClient()
    const id = useParams().id
    const { data } = useQuery(['post'], () => getPost(id))
    const { mutate } = useMutation(() => deletePost(id), {
        onSuccess: (data) => queryClient.invalidateQueries('postList')})
    
    return (
        <s.GridBox>
            {
                data &&
                <Post
                    title={data?.result.title}
                    registeredAt={data?.result.registeredAt.split('T')[0]}
                    nickname={data?.result.user.nickname}
                    homeGym={data?.result.user.homeGym}
                    ageRange={data?.result.user.ageRange}
                    content={data?.result.content}
                    imgUri={data?.result.imgUri}
                />
            }
            {
                user.current !== '' ?
                 <Comment postId={id} type={"POST"}/>
                 : <UnAuthComment />
            }
            <s.ButtonBox>
                {
                    user.current === data?.result.user.userId &&
                    <>
                        <Button
                            type={"submit"} padding={"10px"}
                            _onClick={() => navigate(`/update/${id}`, {state: {data: data?.result}})}
                        >수정</Button>
                        <Button
                            type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                            _onClick={() => {
                                mutate()
                                navigate("/board")}}
                        >삭제</Button>
                    </>
                }
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                    _onClick={() => navigate("/board")}
                >목록</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default Detail