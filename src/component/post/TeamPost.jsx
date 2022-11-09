import * as s from './Post.style'
import Text from "../../element/Text";
import AddMember from "../addmember/AddMember";

const TeamPost = ({title, registeredAt, userId, homeGym, content, ageRange, place, limits, member}) => {
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
                    {userId} ({ageRange}대, {homeGym})
                </s.UserBox>
            </s.TitleContainer>
            <s.MemberContainer>
                <div style={{fontWeight: "bold", margin: "10px 0px"}}>{place}</div>
                <s.MemberCountBox>
                    <Text>팀</Text>
                    <Text bold>( {member.length} / {limits} )</Text>
                    {
                        limits - member.length > 0 && <AddMember />
                    }
                </s.MemberCountBox>
                {
                    member.map((e, i) =>
                        <s.MemberBox
                            key={i}
                            url={"https://m.media-amazon.com/images/M/MV5BMTgxMDkzMDM1OF5BMl5BanBnXkFtZTgwMzI3NTE2NTE@._V1_.jpg"}
                        />
                    )
                }
            </s.MemberContainer>
            <div style={{padding: "16px"}}>
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