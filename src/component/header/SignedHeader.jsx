import * as s from "./Header.style";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteCookie} from "../../shared/Cookie";
import {setUserUp} from "../../store/userSlice";

const SignedHeader = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    return (
        <s.GridBox>
            <div
                onClick={() => navigate(`/`)}
            >ola</div>
            <s.SideBox>
                <Button
                    padding={"10px"}
                >내정보</Button>
                <Button
                    padding={"10px"} margin={"0px 0px 0px 10px"}
                    _onClick={() => navigate('/write/team')}
                >남는거 ㅋㅋ</Button>
                <Button
                    padding={"10px"} margin={"0px 0px 0px 10px"}
                    _onClick={() => {
                        deleteCookie('x_auth')
                        dispatch(setUserUp(''))
                        navigate('/')
                    }}
                >로그아웃</Button>
            </s.SideBox>
        </s.GridBox>
    )
}

export default SignedHeader