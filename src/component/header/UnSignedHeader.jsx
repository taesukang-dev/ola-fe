import * as s from './Header.style'
import Button from "../../element/Button";
import {useNavigate} from 'react-router-dom'

const UnSignedHeader = () => {
    const navigate = useNavigate()
    return (
        <s.GridBox>
            <div
                onClick={() => navigate(`/`)}
            >ola</div>
            <s.SideBox>
                <Button
                    padding={"10px"}
                    _onClick={() => navigate('/signup')}
                >회원가입</Button>
                <Button
                    padding={"10px"} margin={"0px 0px 0px 10px"}
                    _onClick={() => navigate('/login')}
                >로그인</Button>
            </s.SideBox>
        </s.GridBox>
    )
}

export default UnSignedHeader