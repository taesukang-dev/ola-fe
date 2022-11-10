import CommentColumn from "./CommentColumn";

const Comments = ({postId, comment, tab = 0, type}) => {
    return (
            <>
                {
                    comment &&
                    comment.map((e, i) =>
                        <CommentColumn
                            key={i}
                            type={type}
                            postId={postId}
                            commentId={e.id}
                            childs={e.child}
                            tab={tab}
                            username={e.username}
                            nickname={e.nickname}
                            content={e.content}
                            parent={true}
                        />
                    )
                }
            </>
    )
}

export default Comments