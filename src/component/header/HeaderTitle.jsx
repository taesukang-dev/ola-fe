import * as s from './Header.style'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setPostPage, setTeamPostPage} from "../../store/pageSlice";
import {setPostKeyword, setStateKeyword} from "../../store/keywordSlice";

const HeaderTitle = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
                                dispatch(setTeamPostPage(0))
                                dispatch(setPostKeyword(''))
                                navigate('/board/team')
                            }}
                        >
                            팀 모집
                        </s.MenuBox>
                        <s.MenuBox
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setPostPage(0))
                                dispatch(setPostKeyword(''))
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