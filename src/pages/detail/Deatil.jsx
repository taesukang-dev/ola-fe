import * as s from './Detail.style'
import {useParams} from "react-router-dom";
import {getPost} from "../../shared/api/api";
import {useQuery} from "@tanstack/react-query";
import Button from "../../element/Button";
import Post from "../../component/post/Post";
import Comment from "../../component/comment/Comment";

const Detail = () => {
    const id = useParams().id
    const { data } = useQuery(['post'], () => getPost(id))

    return (
        <s.GridBox>
            {
                data &&
                <Post
                    title={data?.result.title}
                    registeredAt={data?.result.registeredAt.split('T')[0]}
                    nickname={data?.result.user.nickname}
                    homeGym={data?.result.user.homeGym}
                    ageRange={data?.result.user.ageRange}
                    content={data?.result.content}
                />
            }
            <Comment postId={id} />
            <s.ButtonBox>
                <Button
                    type={"submit"} padding={"10px"}
                >수정</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                >삭제</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                >목록</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default Detail