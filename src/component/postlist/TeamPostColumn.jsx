import {useNavigate} from "react-router-dom";
import * as s from "./PostList.style";

const TeamPostColumn = ({id, title, nickname, registeredAt, status}) => {
    const navigate = useNavigate()
    return (
        <s.TeamPostColumn
            onClick={() => navigate(`/detail/team/${id}`)}
        >
            <div>{status === "READY" ? "🟢" : "🔴" }</div>
            <div>{title}</div>
            <s.Column>{nickname}</s.Column>
            <s.Column>{registeredAt}</s.Column>
        </s.TeamPostColumn>
    )
}
export default TeamPostColumn