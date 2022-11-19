import * as s from './PostBoard.style'
import {useQuery} from "@tanstack/react-query";
import {getTeamPostList} from "../../shared/api/api";
import TeamPostList from "../../component/postlist/TeamPostList";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";
import PageButton from "../../component/pagebutton/PageButton";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import SearchBar from "../../component/searchbar/SearchBar";

const TeamPostBoard = () => {
    const navigate = useNavigate()
    const page = useSelector((state) => state.page)
    const keyword = useSelector((state) => state.keyword)
    const place = useSelector((state) => state.keyword)
    const {data, refetch} = useQuery(['teamPostList'], () => getTeamPostList(page.teamPost, keyword.teamPost, place.place))

    useEffect(() => {
        refetch()
    }, [page, keyword.teamPost])

        return (
            <s.GridContainer>
                {data && <TeamPostList teamPostList={data.result.contents}/>}
                <s.GridBox>
                    <Button
                        padding={"10px"}
                        _onClick={() => navigate("/write/team")}
                    >글작성</Button>
                </s.GridBox>
                <SearchBar type={"teamPost"}/>
                {data && <PageButton buttonList={data?.result.pageList} type={"teamPost"}/>}
            </s.GridContainer>
        )
}

export default TeamPostBoard