import * as s from './Detail.style'
import {useParams} from "react-router-dom";
import Button from "../../element/Button";
import {useQuery} from "@tanstack/react-query";
import {getTeamPost} from "../../shared/api/api";
import {useEffect} from "react";
import TeamPost from "../../component/post/TeamPost";

const TeamDetail = () => {
    const id = useParams().id
    const { data } = useQuery(['post'], () => getTeamPost(id))
    useEffect(() => {
        console.log(data)
    }, [data])

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
            <s.ButtonBox>
                <Button
                    type={"submit"} padding={"10px"}
                >수정</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                >삭제</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                >목록</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default TeamDetail