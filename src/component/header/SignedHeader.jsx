import * as s from "./Header.style";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";

const SignedHeader = () => {
    const navigate = useNavigate()
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
                    _onClick={() => navigate('/team/write')}
                >남는거 ㅋㅋ</Button>
            </s.SideBox>
        </s.GridBox>
    )
}

export default SignedHeader