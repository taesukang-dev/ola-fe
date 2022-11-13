import * as s from './Detail.style'
import {useNavigate, useParams} from "react-router-dom";
import Button from "../../element/Button";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deletePost, getTeamPost} from "../../shared/api/api";
import TeamPost from "../../component/post/TeamPost";
import Comment from "../../component/comment/Comment";
import {useSelector} from "react-redux";
import UnAuthComment from "../../component/comment/UnAuthComment";
import {useEffect} from "react";

const TeamDetail = () => {
    const queryClient = useQueryClient()
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const id = useParams().id
    const { data } = useQuery(['post'], () => getTeamPost(id))
    const { mutate } = useMutation(() => deletePost(id), {
        onSuccess: (data) => queryClient.invalidateQueries('teamPostList')})

    return (
        <s.GridBox>
            <TeamPost
                id={id}
                postUser={data?.result.user}
                title={data?.result.title}
                status={data?.result.status}
                registeredAt={data?.result.registeredAt.split('T')[0]}
                nickname={data?.result.user.nickname}
                userId={data?.result.user.userId}
                homeGym={data?.result.user.homeGym}
                ageRange={data?.result.user.ageRange}
                content={data?.result.content}
                place={data?.result.place}
                limits={data?.result.limits}
                member={data?.result.member}
            />
            {
                user.current !== '' ?
                    <Comment postId={id} type={"TEAM_POST"}/>
                    : <UnAuthComment />
            }
            <s.ButtonBox>
                {
                    user.current === data?.result.user.userId &&
                    <>
                        <Button
                            type={"submit"} padding={"10px"}
                            _onClick={() => navigate(`/update/team/${id}`, {state: {data: data?.result}})}
                        >수정</Button>
                        <Button
                            type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                            _onClick={() => {
                            mutate()
                            navigate("/board/team")}}
                        >삭제</Button>
                    </>
                }
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                    _onClick={() => navigate("/board/team")}
                >목록</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default TeamDetail