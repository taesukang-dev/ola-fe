import * as s from './PostBoard.style'
import {useQuery} from "@tanstack/react-query";
import {getPostList} from "../../shared/api/api";
import PostList from "../../component/postlist/PostList";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";

const PostBoard = () => {
    const navigate = useNavigate()
    const { data } = useQuery(['potsList'], () => getPostList())
    return (
        <s.GridContainer>
            {data && <PostList postList={data?.result} board />}
            <s.GridBox>
                <Button
                    padding={"10px"}
                    _onClick={() => navigate("/write")}
                >글작성</Button>
            </s.GridBox>
        </s.GridContainer>
    )
}

export default PostBoard