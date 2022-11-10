import {useQuery} from "@tanstack/react-query";
import {getPostList, getTeamPostList} from "../../shared/api/api";
import PostList from "../../component/postlist/PostList";
import TeamPostList from "../../component/postlist/TeamPostList";
import MainBanner from "../../component/mainbanner/MainBanner";

const Main = () => {
    const { data } = useQuery(['potsList'], () => getPostList())
    const teamData = useQuery(['teamPostList'], () => getTeamPostList())
    return(
        <>
            <MainBanner />
            <TeamPostList teamPostList={teamData.data?.result}/>
            <PostList postList={data?.result}/>
        </>
    )

}
export default Main