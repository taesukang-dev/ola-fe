import * as s from "./PostList.style";
import PostColumn from "./PostColumn";
import {useNavigate} from "react-router-dom";
import {setPostPage} from "../../store/pageSlice";
import {useDispatch} from "react-redux";

const PostList = ({postList, title="게시글"}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <s.GridContainer>
            <s.GridBox>
                <s.TitleBox>
                    <s.Text
                        whileHover={{
                            color: "#1b29f7",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            dispatch(setPostPage(0))
                            navigate('/board')
                        }}
                    >{title}
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