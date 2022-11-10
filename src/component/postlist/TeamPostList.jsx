import * as s from "./PostList.style";
import TeamPostCard from "./TeamPostCard";
import {useNavigate} from "react-router-dom";

const TeamPostList = ({ teamPostList, board, count = 10 }) => {
    const navigate = useNavigate()
    return (
        <s.GridContainer>
            <s.GridBox>
                <s.TitleBox>
                    {
                        !board &&
                        <s.Text
                            whileHover={{
                                color: "#1b29f7",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate('/board/team')}
                        >최근 팀 모집
                        </s.Text>
                    }
                </s.TitleBox>
                <s.CardContainer>
                    {
                        teamPostList &&
                        teamPostList.map(
                            (e, i) =>
                                i < count ?
                                    <TeamPostCard
                                        key={i}
                                        id={e.id}
                                        title={e.title}
                                        place={e.place}
                                        limits={e.limits}
                                        numMember={e.member.length}
                                    />
                                    : ''
                        )
                    }
                </s.CardContainer>

            </s.GridBox>
        </s.GridContainer>
    )
}

export default TeamPostList