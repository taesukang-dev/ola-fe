import * as s from './Post.style'

const Post = ({title, registeredAt, nickname, homeGym, content, ageRange,imgUri}) => {
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
                    {nickname} ({ageRange}대, {homeGym})
                </s.UserBox>
            </s.TitleContainer>
            <div style={{padding: "16px", height: "30vh"}}>
                {
                    imgUri &&
                    <img
                        width={"100%"}
                        height={"80%"}
                        src={`${process.env.REACT_APP_AWS_PATH}/${imgUri}`} />
                }
                <div>
                    {content}
                </div>
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