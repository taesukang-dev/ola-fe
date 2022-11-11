import * as s from './Post.style'
import Text from "../../element/Text";
import AddMember from "../addmember/AddMember";
import Button from "../../element/Button";
import {useSelector} from "react-redux";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteMember} from "../../shared/api/api";

const TeamPost = ({id, title, registeredAt, nickname, userId, homeGym, content, ageRange, place, limits, member}) => {
    const queryClient = useQueryClient()
    const user = useSelector((state) => state.user)

    const {mutate} = useMutation((memberId) => deleteMember(id, memberId), {
        onSuccess: (data) => queryClient.invalidateQueries('post')})

    const deleteMemberMutate = (id, username) => {
        if (user.current !== username) {
            alert("자신의 항목 외에는 취소할 수 없습니다.")
            return
        }
        mutate(id);
    }

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
                        limits - member.length > 0 && <AddMember id={id} userId={userId} member={member} />
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
                                        e.userId === user.current &&
                                        userId !== user.current &&
                                        <Button
                                            padding={"5px 10px"}
                                            fontSize={"10px"}
                                            bg={"#d1312d"}
                                            color={"white"}
                                            bold={"true"}
                                            _onClick={() => deleteMemberMutate(e.id, e.userId)}
                                        >
                                            취소
                                        </Button>
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