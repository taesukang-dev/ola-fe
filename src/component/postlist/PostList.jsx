import * as s from "./PostList.style";
import PostColumn from "./PostColumn";
import {useNavigate} from "react-router-dom";

const PostList = ({postList}) => {
    const navigate = useNavigate()
    return (
        <s.GridContainer>
            <s.GridBox>
                <s.TitleBox>
                    <s.Text
                        whileHover={{
                            color: "#1b29f7",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate('/board')}
                    >게시글
                    </s.Text>
                </s.TitleBox>
                {
                    postList &&
                    postList.map(
                        (e, i) =>
                            <PostColumn
                                key={i}
                                id={e.id}
                                title={e.title}
                                nickname={e.user.nickname}
                                registeredAt={e.registeredAt.split('T')[0]}/>)
                }
            </s.GridBox>

        </s.GridContainer>
    )
}

export default PostList