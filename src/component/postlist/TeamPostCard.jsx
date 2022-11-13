import * as s from './PostList.style'
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";

const TeamPostCard = ({id, status, title, place, limits, members}) => {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()

    const handleNavigate = () => {
        let flag = false
        if (status === 'CONFIRMED') {
            members.filter(e => e.userId === user.current ? flag = true : flag)
        } else {
            navigate(`/detail/team/${id}`);
            return
        }
        if (flag) {
            navigate(`/detail/team/${id}`);
            return;
        } else {
            alert('확정된 글은 멤버만 조회할 수 있습니다.')
        }
    }

    return (
        <s.CardBox onClick={handleNavigate}>
            <s.CardStatusBox warn={limits - members.length <= 0} status={status === "CONFIRMED"}>
                {
                    status === "CONFIRMED" ?
                    <s.Number>확정 ({members.length} / {limits})</s.Number> :
                    <s.Number>참여 인원 ({members.length} / {limits})</s.Number>
                }
            </s.CardStatusBox>
            <s.CardTitleBox>{title}</s.CardTitleBox>
            <s.CardPlaceBox>장소: {place}</s.CardPlaceBox>
        </s.CardBox>
    )
}

export default TeamPostCard