import * as s from './PostBoard.style'
import {useQuery} from "@tanstack/react-query";
import {getTeamPostList, getTeamPostsByLocation} from "../../shared/api/api";
import TeamPostList from "../../component/postlist/TeamPostList";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";
import PageButton from "../../component/pagebutton/PageButton";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import SearchBar from "../../component/searchbar/SearchBar";

const TeamPostBoard = () => {
    const user = useSelector((state) => state.user).position
    const [location, setLocation] = useState(false)
    const navigate = useNavigate()
    const page = useSelector((state) => state.page)
    const keyword = useSelector((state) => state.keyword)
    const place = useSelector((state) => state.keyword)
    const {data, refetch} = useQuery(['teamPostList'], () => getTeamPostList(page.teamPost, keyword.teamPost, place.place))
    const locationPosts = useQuery(['teamPostByLocation'], () => getTeamPostsByLocation({x: user.x, y: user.y}),{
        onSuccess: (data) => console.log(data),
        enabled: !!location
    })

    useEffect(() => {
        refetch()
    }, [page, keyword.teamPost])

        return (
            <s.GridContainer>
                {!location && data && <TeamPostList teamPostList={data.result.contents}/>}
                {location && locationPosts.data && <TeamPostList teamPostList={locationPosts.data.result} />}
                <s.GridBox>
                    {
                        !location ?
                            <Button
                                padding={"10px"}
                                _onClick={() => setLocation(true)}>나와 가까운 모집</Button> :
                            <Button
                                padding={"10px"}
                                _onClick={() => setLocation(false)}>최신 순</Button>
                    }
                    <Button
                        padding={"10px"}
                        margin={"0px 0px 0px 10px"}
                        _onClick={() => navigate("/write/team")}
                    >글작성</Button>
                </s.GridBox>
                <SearchBar type={"teamPost"}/>
                {data && <PageButton buttonList={data?.result.pageList} type={"teamPost"}/>}
            </s.GridContainer>
        )
}

export default TeamPostBoard