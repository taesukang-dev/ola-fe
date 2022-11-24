import UpdateInfo from "../../component/updateinfo/UpdateInfo";
import {useQuery} from "@tanstack/react-query";
import {getMyPosts, getMyTeamPosts} from "../../shared/api/api";
import PostList from "../../component/postlist/PostList";
import TeamPostList from "../../component/postlist/TeamPostList";

const MyPage = () => {
    const {data} = useQuery(['myPosts'], () => getMyPosts())

    const teamData = useQuery(['myTeamPost'], () => getMyTeamPosts())

    return (
        <>
            <UpdateInfo />
            <PostList
                postList={data?.result}
                title={"내 게시글"}
            />
            <TeamPostList
                teamPostList={teamData.data?.result}
                title={"내가 참여한 팀 모집"}
            />
        </>
    )
}

export default MyPage