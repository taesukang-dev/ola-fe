import * as s from "./Header.style";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteCookie} from "../../shared/Cookie";
import {setUserUp} from "../../store/userSlice";
import HeaderTitle from "./HeaderTitle";
import AlarmModal from "../alarmmodal/AlarmModal";
import alarmModal from "../alarmmodal/AlarmModal";
import {useEffect} from "react";
import {setView} from "../../store/alarmModalSlice";

const SignedHeader = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alarm = useSelector((state) => state.alarm)

    return (
        <s.GridBox>
            <HeaderTitle />
            <s.SideBox>
                <Button
                    padding={"10px"}
                >내정보</Button>
                <s.AlarmBox>
                    <Button
                        padding={"10px"}
                        margin={"0px 0px 0px 10px"}
                        _onClick={() => dispatch(setView(!alarm.current))}
                    >
                        알람
                    </Button>
                    {alarm.current && <AlarmModal />}
                </s.AlarmBox>
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