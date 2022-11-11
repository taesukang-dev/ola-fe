import * as s from "./Comment.style";
import Text from "../../element/Text";

const UnAuthComment = () => {
    return (
        <s.CommentContainer>
            <s.CommentHeader style={{margin: "10px 0px"}}>
                <Text bold color={"black"}>댓글은 로그인 후 보실 수 있습니다.</Text>
            </s.CommentHeader>
        </s.CommentContainer>
    )
}

export default UnAuthComment