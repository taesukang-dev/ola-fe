import * as s from './PostBoard.style'
import {useQuery} from "@tanstack/react-query";
import {getPostList} from "../../shared/api/api";
import PostList from "../../component/postlist/PostList";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";
import PageButton from "../../component/pagebutton/PageButton";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const PostBoard = () => {
    const navigate = useNavigate()
    const page = useSelector((state) => state.page)
    const { data, refetch } = useQuery(['postList'], () => getPostList(page.post))

    useEffect(() => {
        refetch()
    }, [page])

    return (
        <s.GridContainer>
            {data && <PostList postList={data?.result[0]} />}
            <s.GridBox>
                <Button
                    padding={"10px"}
                    _onClick={() => navigate("/write")}
                >글작성</Button>
            </s.GridBox>
            {data && <PageButton buttonList={data?.result[1]} type={"post"}/>}
        </s.GridContainer>
    )
}

export default PostBoard