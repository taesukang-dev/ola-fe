import * as s from './Post.style'

const Post = ({title, registeredAt, userId, homeGym, content, ageRange}) => {
    return (
        <div style={{width: "80%"}}>
            <s.TitleContainer>
                <s.TitleBox>
                    <div>
                        {title}
                    </div>
                    <s.RegisterBox>
                        {registeredAt}
                    </s.RegisterBox>
                </s.TitleBox>
                <s.UserBox>
                    {userId} ({ageRange}대, {homeGym})
                </s.UserBox>
            </s.TitleContainer>
            <div style={{padding: "16px"}}>
                {content}
            </div>
        </div>
    )
}

Post.defaultProps = {
    title: "none",
    registeredAt: "none",
    userId: "none",
    homeGym: "none",
    content: "none",
    ageRange: "none",
}

export default Post