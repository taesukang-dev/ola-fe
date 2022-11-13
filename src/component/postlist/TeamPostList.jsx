import * as s from "./PostList.style";
import TeamPostCard from "./TeamPostCard";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setTeamPostPage} from "../../store/pageSlice";
import {setPlace, setTeamPostKeyword} from "../../store/keywordSlice";

const TeamPostList = ({ teamPostList, title="팀 모집", count = 10 }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <s.GridContainer>
            <s.GridBox>
                <s.TitleBox>
                    <s.Text
                        whileHover={{
                            color: "#1b29f7",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            navigate('/board/team')
                            dispatch(setTeamPostPage(0))
                            dispatch(setTeamPostKeyword(''))
                            dispatch(setPlace(''))
                        }}
                    >{title}
                    </s.Text>
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
                                        status={e.status}
                                        title={e.title}
                                        place={e.place}
                                        limits={e.limits}
                                        members={e.member}
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