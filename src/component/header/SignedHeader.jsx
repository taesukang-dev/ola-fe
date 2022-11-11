import * as s from "./Header.style";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteCookie, getCookie} from "../../shared/Cookie";
import {setUserUp} from "../../store/userSlice";
import HeaderTitle from "./HeaderTitle";
import AlarmModal from "../alarmmodal/AlarmModal";
import {useEffect, useState} from "react";
import {setView} from "../../store/alarmModalSlice";

const SignedHeader = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alarm = useSelector((state) => state.alarm)
    const [warn, setWarn] = useState("false")

    useEffect(() => {
        const eventSource = new EventSource("http://localhost:8080/api/v1/users/alarm/subscribe?token=" + getCookie('x_auth').split(' ')[1])
        eventSource.addEventListener("open", function (event) {
            console.log("connection opened");
        });

        eventSource.addEventListener("alarm", function (event) {
            setWarn("true")
        });

        eventSource.addEventListener("error", function (event) {
            console.log(event.target.readyState);
            if (event.target.readyState === EventSource.CLOSED) {
                console.log("eventsource closed (" + event.target.readyState + ")");
            }
            eventSource.close();
        });
    }, [])

    return (
        <s.GridBox>
            <HeaderTitle />
            <s.SideBox>
                <Button
                    padding={"10px"}
                >내정보</Button>
                <s.AlarmBox>
                    <Button
                        warn={warn}
                        padding={"10px"}
                        margin={"0px 0px 0px 10px"}
                        _onClick={() => {
                            dispatch(setView(!alarm.current))
                            setWarn("false")
                        }}
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