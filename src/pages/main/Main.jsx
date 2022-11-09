import {useQuery} from "@tanstack/react-query";
import {getPostList, getTeamPostList} from "../../shared/api/api";
import PostList from "../../component/postlist/PostList";
import TeamPostList from "../../component/postlist/TeamPostList";

const Main = () => {
    const { data } = useQuery(['potsList'], () => getPostList())
    const teamData = useQuery(['teamPostList'], () => getTeamPostList())
    return(
        <>
            <TeamPostList teamPostList={teamData.data?.result}/>
            <PostList postList={data?.result}/>
        </>
    )

}
export default Main