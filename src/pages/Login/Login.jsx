import * as s from './Login.style'
import Input from "../../element/Input";
import Button from "../../element/Button";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {login} from "../../shared/api/api";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserUp} from "../../store/userSlice";
import Text from "../../element/Text";
import {deleteCookie, getCookie} from "../../shared/Cookie";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { mutate, isLoading, isSuccess, isError } = useMutation(() => login({
        username: username,
        password: password
    }), {
        onSuccess: (data) => {
            document.cookie = 'x_auth' + '=' + 'Bearer ' + data.result
            navigate('/')
            dispatch(setUserUp(username))
        },
        onError: (data) => {
            alert("로그인정보를 확인해주세요.")
        }
    })

    const loginMutate = () => {
        if (getCookie('x_auth')) {
            deleteCookie('x_auth')
        }
        if (username === '' || password === '') {
            alert("로그인 정보를 입력했는지 확인해주세요.");
            return;
        }
        mutate()
    }

    return (
        <s.GridBox>
            <Text fontSize={"32px"} bold>로그인</Text>
            <div style={{width: "80%"}}>
                <Input
                    label={"아이디"}
                    _onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type={"password"} label={"패스워드"}
                    _onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button
                type={"submit"} padding={"10px"}
                _onClick={() => loginMutate()}
            >로그인</Button>
        </s.GridBox>
    )
}

export default Login