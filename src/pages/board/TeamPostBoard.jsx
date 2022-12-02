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
    const user = useSelector((state) => state.user)
    const [location, setLocation] = useState(true)
    const navigate = useNavigate()
    const page = useSelector((state) => state.page)
    const keyword = useSelector((state) => state.keyword)
    const place = useSelector((state) => state.keyword)
    const {data, refetch} = useQuery(['teamPostList'], () => getTeamPostList(page.teamPost, keyword.teamPost, place.place))
    const locationPosts = useQuery(['teamPostByLocation'], () => getTeamPostsByLocation({x: user.position.x, y: user.position.y}, page.locationPost),{
        enabled: !!location && user.position.x !== 0 && user.position.y !== 0 && user.current !== ''
    })

    useEffect(() => {
        refetch()
    }, [page, keyword.teamPost])

    useEffect(() => {
        if (user.current !== '') {
            locationPosts.refetch()
        }
    }, [page.locationPost])

    useEffect(() => {
        if (user.current === '') {
            setLocation(false);
        } else {
            setLocation(true)
        }
    }, [user.current])

        return (
            <s.GridContainer>
                {!location && data && <TeamPostList teamPostList={data.result.contents}/>}
                {
                    user.position.x !== 0 &&
                    user.position.y !== 0 &&
                    location && locationPosts.data && <TeamPostList teamPostList={locationPosts.data.result} />
                }
                {
                    user.position.x === 0 &&
                    user.position.y === 0 &&
                    user.current !== '' &&
                    <div>위치 정보를 수집 중입니다.</div>
                }
                <s.GridBox>
                    {
                        user.current !== '' &&
                        !location ?
                            <Button
                                padding={"10px"}
                                _onClick={() => setLocation(true)}>나와 가까운 모집</Button> :
                            <Button
                                padding={"10px"}
                                _onClick={() => setLocation(false)}>최신 순</Button>
                    }
                    {
                        user.current !== '' &&
                        <Button
                            padding={"10px"}
                            margin={"0px 0px 0px 10px"}
                            _onClick={() => navigate("/write/team")}
                        >글작성</Button>
                    }
                </s.GridBox>
                {!location && <SearchBar type={"teamPost"}/>}
                {!location && data && <PageButton buttonList={data?.result.pageList} type={"teamPost"}/>}
                {location && locationPosts.data && <PageButton buttonList={data?.result.pageList} type={"locationPost"}/>}
            </s.GridContainer>
        )
}

export default TeamPostBoard