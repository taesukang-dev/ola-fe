import * as s from './Header.style'
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const HeaderTitle = () => {
    const navigate = useNavigate()
    const [viewMenu, setVieMenu] = useState(false)
    return (
        <>
            <s.LogoBox
                onClick={() => navigate(`/`)}
                onMouseOver={() => setVieMenu(true)}
                onMouseLeave={() => setVieMenu(false)}
            >
                <div>Ola</div>
                {
                    viewMenu &&
                    <s.MenuContainer>
                        <s.MenuBox
                            onClick={(e) => {
                                e.stopPropagation()
                                navigate('/board/team')
                            }}
                        >
                            팀 모집
                        </s.MenuBox>
                        <s.MenuBox
                            onClick={(e) => {
                                e.stopPropagation()
                                navigate('/board')
                            }}
                        >
                            게시글
                        </s.MenuBox>
                    </s.MenuContainer>
                }
            </s.LogoBox>

        </>
    )
}

export default HeaderTitle