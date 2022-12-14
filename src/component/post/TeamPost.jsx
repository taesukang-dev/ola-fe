import * as s from './Post.style'
import Text from "../../element/Text";
import Button from "../../element/Button";
import {useSelector} from "react-redux";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {confirmTeam, deleteMember} from "../../shared/api/api";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import WaitList from "../waitlist/WaitList";

const TeamPost = ({id, title, status, registeredAt, nickname, userId, homeGym, content, ageRange, place, limits, member, imgUri, address}) => {
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
                <div style={{fontWeight: "bold", margin: "16px 0px 32px 0px", textAlign: "right"}}>
                    {place}
                    <div style={{fontSize: "12px", textAlign: "right"}}>{address}</div>
                </div>

                <s.MemberCountBox>
                    <Text>팀</Text>
                    <Text bold>( {member.length} / {limits} )</Text>
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
                                            url={`${process.env.REACT_APP_AWS_PATH}/${e.imgUri}`}
                                        />
                                        {e.nickname} ({e.ageRange}대, {e.homeGym.placeName})
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
            <WaitList id={id} userId={userId} limits={limits} member={member}/>
            <div style={{padding: "16px", height: "30vh"}}>
                {
                    imgUri &&
                    <img
                        width={"100%"}
                        height={"80%"}
                        src={`${process.env.REACT_APP_AWS_PATH}/${imgUri}`} />
                }
                <div>
                    {content}
                </div>
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