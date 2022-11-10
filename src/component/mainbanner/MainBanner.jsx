import climbing from '../../static/climbing.jpg'
import * as s from './MainBanner.style'

const MainBanner = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center"
        }}>
            <s.MainBannerBox url={climbing}/>
            <s.BannerText>
                등반을 위한 팀을 찾으세요!
                <s.BannerText>
                    Ola
                </s.BannerText>
            </s.BannerText>
        </div>
    )
}

export default MainBanner