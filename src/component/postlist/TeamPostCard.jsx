import * as s from './PostList.style'
import {useNavigate} from "react-router-dom";

const TeamPostCard = ({id, title, place, limits, numMember}) => {
    const navigate = useNavigate()

    return (
        <s.CardBox
            onClick={() => navigate(`/detail/team/${id}`)}
        >
            <s.CardStatusBox warn={limits - numMember <= 0}>
                <s.Number>참여 인원 ({numMember} / {limits})</s.Number>
            </s.CardStatusBox>
            <s.CardTitleBox>{title}</s.CardTitleBox>
            <s.CardPlaceBox>장소: {place}</s.CardPlaceBox>
        </s.CardBox>
    )
}

export default TeamPostCard