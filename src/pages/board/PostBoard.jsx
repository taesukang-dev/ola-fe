import * as s from './PostBoard.style'
import {useQuery} from "@tanstack/react-query";
import {getPostList} from "../../shared/api/api";
import PostList from "../../component/postlist/PostList";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";
import PageButton from "../../component/pagebutton/PageButton";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import SearchBar from "../../component/searchbar/SearchBar";

const PostBoard = () => {
    const navigate = useNavigate()
    const page = useSelector((state) => state.page)
    const keyword = useSelector((state) => state.keyword)
    const { data, refetch } = useQuery(['postList'], () => getPostList(page.post, keyword.post))

    useEffect(() => {
        refetch()
    }, [page, keyword])

    return (
        <s.GridContainer>
            {data && <PostList postList={data?.result.contents} />}
            <s.GridBox>
                <Button
                    padding={"10px"}
                    _onClick={() => navigate("/write")}
                >글작성</Button>
            </s.GridBox>
            <SearchBar type={"post"}/>
            {data && <PageButton buttonList={data?.result.pageList} type={"post"}/>}
        </s.GridContainer>
    )
}

export default PostBoard