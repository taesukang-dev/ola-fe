import * as s from './Detail.style'
import {useNavigate, useParams} from "react-router-dom";
import Button from "../../element/Button";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deletePost, getTeamPost} from "../../shared/api/api";
import TeamPost from "../../component/post/TeamPost";
import Comment from "../../component/comment/Comment";

const TeamDetail = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const id = useParams().id
    const { data } = useQuery(['post'], () => getTeamPost(id))
    const { mutate } = useMutation(() => deletePost(id), {
        onSuccess: (data) => queryClient.invalidateQueries('teamPostList')})

    return (
        <s.GridBox>
            <TeamPost
                id={id}
                title={data?.result.title}
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
            <Comment postId={id} type={"TEAM_POST"}/>
            <s.ButtonBox>
                <Button
                    type={"submit"} padding={"10px"}
                >수정</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                    _onClick={() => {
                        mutate()
                        navigate("/board/team")
                    }}
                >삭제</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                    _onClick={() => navigate("/board/team")}
                >목록</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default TeamDetail