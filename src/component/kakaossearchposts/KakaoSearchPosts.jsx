import * as s from './KakaoSearchPosts.style'
import {useEffect, useState} from "react";
import {getRecommendPostsImg} from "../../shared/api/api";

const KakaoSearchPosts = ({posts}) => {
    const [newPost, setNewPost] = useState([])
    let result = []

    useEffect(() => {
        getRecommendPostsImg({urls: posts.map(e => e.url)})
            .then(res => {
                posts.forEach((e, i) => result.push({img: res.result[i], ...e}))
                setNewPost(result.filter(e => e.img !== ''))
            })
    }, [])

    return (
        <s.GridContainer>
            <s.GridBox>
                <s.TitleBox>
                    <s.Text
                        whileHover={{
                            color: "#1b29f7",
                            cursor: "pointer",
                        }}
                    >추천 글
                    </s.Text>
                </s.TitleBox>
                {
                    newPost &&
                    newPost.map((e, i) =>
                        <s.Title href={e.url} key={i} target={"_blank"}>
                            <s.ImgBox referrerPolicy="no-referrer" src={e.img} alt={""}/>
                            <p dangerouslySetInnerHTML={{__html: e.title }}></p>
                        </s.Title>
                    )
                }
            </s.GridBox>
        </s.GridContainer>
    )
}

export default KakaoSearchPosts