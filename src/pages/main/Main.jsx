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
            {teamData && <TeamPostList teamPostList={teamData.data?.result.contents} count={3}/>}
            {data && <PostList postList={data?.result.contents}/>}
        </>
    )
}
export default Main