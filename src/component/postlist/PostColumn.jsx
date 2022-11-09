import * as s from "./PostList.style";
import {useNavigate} from "react-router-dom";

const PostColumn = ({id, title, nickname, registeredAt}) => {
    const navigate = useNavigate()
    return (
        <s.PostColumnBox
            onClick={() => navigate(`/detail/${id}`)}
        >
            <s.Column>{id}</s.Column>
            <div>{nickname}</div>
            <div>{title}</div>
            <s.Column>{registeredAt}</s.Column>
        </s.PostColumnBox>
    )
}

export default PostColumn