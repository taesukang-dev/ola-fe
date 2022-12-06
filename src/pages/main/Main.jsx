import {useQuery} from "@tanstack/react-query";
import {getPostList, getTeamPostList, kakaoSearch} from "../../shared/api/api";
import PostList from "../../component/postlist/PostList";
import TeamPostList from "../../component/postlist/TeamPostList";
import MainBanner from "../../component/mainbanner/MainBanner";
import KakaoSearchPosts from "../../component/kakaossearchposts/KakaoSearchPosts";

const Main = () => {
    const { data } = useQuery(['potsList'], () => getPostList())
    const teamData = useQuery(['teamPostList'], () => getTeamPostList())
    const kakaoSearchPosts = useQuery(['kakaoSearchPosts'], () => kakaoSearch())

    return(
        <>
            <MainBanner />
            {teamData && <TeamPostList teamPostList={teamData.data?.result.contents} count={3}/>}
            {data && <PostList postList={data?.result.contents}/>}
            {kakaoSearchPosts.data && <KakaoSearchPosts posts={kakaoSearchPosts.data?.documents} />}
        </>
    )
}
export default Main