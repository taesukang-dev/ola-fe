import * as s from './Post.style'
import Text from "../../element/Text";
import AddMember from "../addmember/AddMember";
import Button from "../../element/Button";
import {useSelector} from "react-redux";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {confirmTeam, deleteMember} from "../../shared/api/api";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const TeamPost = ({id, title, status, registeredAt, nickname, userId, homeGym, content, ageRange, place, limits, member}) => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)

    const {mutate} = useMutation((memberId) => deleteMember(id, memberId), {
        onSuccess: (data) => queryClient.invalidateQueries('post')})

    const confirmMutation = useMutation(() => confirmTeam(id), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('post')
        }
    })

    const deleteMemberMutate = (id, username) => {
        if (userId !== user.current && user.current !== username) {
            alert("자신의 항목 외에는 취소할 수 없습니다.")
            return
        }
        mutate(id);
    }

    useEffect(() => {
        let flag = false
        if (status === 'CONFIRMED') {
            member.filter(e => e.userId === user.current ? flag = true : flag)
        } else {
            return
        }
        if (!flag) {
            alert('확정된 글은 멤버만 조회할 수 있습니다.')
            navigate(-1)
            return
        }
    },[status])

    return (
        <div style={{width: "80%"}}>
            <s.TitleContainer>
                <s.TitleBox>
                    <div>
                        {title}
                    </div>
                    <s.RegisterBox>
                        {registeredAt}
                    </s.RegisterBox>
                </s.TitleBox>
                <s.UserBox>
                    {nickname} ({ageRange}대, {homeGym})
                </s.UserBox>
            </s.TitleContainer>
            <s.MemberContainer>
                <div style={{fontWeight: "bold", margin: "10px 0px"}}>{place}</div>
                <s.MemberCountBox>
                    <Text>팀</Text>
                    <Text bold>( {member.length} / {limits} )</Text>
                    {
                        limits - member.length > 0 &&
                        user.current !== userId &&
                        <AddMember id={id} userId={userId} member={member} />
                    }
                    {
                        limits - member.length === 0 &&
                        user.current === userId &&
                        status === "READY" &&
                        <Button padding={"5px 10px"}
                                fontSize={"10px"}
                                bg={"#d1312d"}
                                color={"white"}
                                bold={"true"}
                                _onClick={() => confirmMutation.mutate()}
                        >확정</Button>
                    }
                </s.MemberCountBox>
                {
                    member.map((e, i) =>
                        {
                            return (
                                <s.MemberCardBox
                                key={i}>
                                    <s.MemberCard>
                                        <s.MemberBox
                                            url={"https://m.media-amazon.com/images/M/MV5BMTgxMDkzMDM1OF5BMl5BanBnXkFtZTgwMzI3NTE2NTE@._V1_.jpg"}
                                        />
                                        {e.nickname} ({e.ageRange}대, {e.homeGym})
                                    </s.MemberCard>
                                    {
                                        userId === user.current // 방장
                                        ?
                                        (e.userId !== user.current &&
                                        status === "READY" &&
                                        <Button
                                            padding={"5px 10px"}
                                            fontSize={"10px"}
                                            bg={"#d1312d"}
                                            color={"white"}
                                            bold={"true"}
                                            _onClick={() => deleteMemberMutate(e.id, e.userId)}
                                        >
                                            방출
                                        </Button>)
                                        : // 방장 아닐 때
                                        (
                                            e.userId === user.current &&
                                            userId !== user.current &&
                                            status === "READY" &&
                                            <Button
                                                padding={"5px 10px"}
                                                fontSize={"10px"}
                                                bg={"#d1312d"}
                                                color={"white"}
                                                bold={"true"}
                                                _onClick={() => deleteMemberMutate(e.id, e.userId)}
                                            >
                                                취소
                                            </Button>)
                                    }
                            </s.MemberCardBox>)
                        }
                    )
                }
            </s.MemberContainer>
            <div style={{padding: "16px", height: "30vh"}}>
                {content}
            </div>
        </div>
    )
}

TeamPost.defaultProps = {
    title: "none",
    registeredAt: "none",
    userId: "none",
    homeGym: "none",
    content: "none",
    ageRange: "none",
    place: "none",
    limits: "none",
    member: [],
}

export default TeamPost