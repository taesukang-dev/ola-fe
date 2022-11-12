import {useQuery} from "@tanstack/react-query";
import {getPostList, getTeamPostList} from "../../shared/api/api";
import PostList from "../../component/postlist/PostList";
import TeamPostList from "../../component/postlist/TeamPostList";
import MainBanner from "../../component/mainbanner/MainBanner";
import {useEffect} from "react";

const Main = () => {
    const { data } = useQuery(['potsList'], () => getPostList())
    const teamData = useQuery(['teamPostList'], () => getTeamPostList())

    useEffect(() => {
        console.log(teamData.data)
    },[teamData])

    return(
        <>
            <MainBanner />
            {teamData && <TeamPostList teamPostList={teamData.data?.result[0]} count={3}/>}
            {data && <PostList postList={data?.result[0]}/>}
        </>
    )

}
export default Main