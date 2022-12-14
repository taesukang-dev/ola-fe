import * as s from './SignUp.style'
import Text from "../../element/Text";
import Input from "../../element/Input";
import Button from "../../element/Button";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {signUp} from "../../shared/api/api";
import {useNavigate} from "react-router-dom";
import FileUpload from "../../component/fileupload/FileUpload";
import {setFile} from "../../store/fileSlice";
import {useDispatch, useSelector} from "react-redux";
import s3Upload from "../../shared/S3Upload";
import SearchHomeyGym from "../../component/searchhomegym/SearchHomeyGym";
import {setSignUpPlace} from "../../store/userSlice";

const SignUp = () => {
    const dispatch = useDispatch()
    const file = useSelector((state) => state.file)
    const userPlace = useSelector((state) => state.user.place)
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [name, setName] = useState('')
    const [ageRange, setAgeRange] = useState('')
    const [gender, setGender] = useState('')
    const [nickname, setNickname] = useState('')

    const { mutate, isLoading, isSuccess, isError } = useMutation((param) => signUp(param), {
        onSuccess: (data) => navigate('/login')
    })

    const signUpMutate = async () => {
        if (password !== passwordCheck) {
            alert("패스워드를 확인하세요.")
            return
        }
        if (username.replace(/ /gi, '').length === 0 ||
            password.replace(/ /gi, '').length === 0 ||
            passwordCheck.replace(/ /gi, '').length === 0 ||
            name.replace(/ /gi, '').length === 0 ||
            ageRange.replace(/ /gi, '').length === 0 ||
            gender.replace(/ /gi, '').length === 0 ||
            nickname.replace(/ /gi, '').length === 0 ||
            userPlace.placeName === '') {
            alert("빠짐없이 입력해주세요.")
            return
        }

        if (username.length < 5) {
            alert("아이디는 5글자 이상이어야 합니다.")
            return
        }

        let imgUri = '';
        if (file.file !== '') {
            imgUri = await s3Upload(file.file)
        }

        mutate({
            username: username,
            imgUri: imgUri,
            password: password,
            nickname: nickname,
            name: name,
            ageRange: ageRange,
            homeGymRequest: userPlace,
            gender: gender,
        });
        dispatch(setFile(''))
        dispatch(setSignUpPlace({
            placeName: '',
            roadAddressName: '',
            categoryName: '',
            x: '',
            y: ''
        }))
    }

    return (
        <s.GridBox>
            <Text fontSize={"32px"} bold>회원가입</Text>
            <div style={{width: "80%"}}>
                <Input
                    _onChange={(e) => setUsername(e.target.value)}
                    label={"아이디"}/>
                <FileUpload />
                <Input
                    type={"password"} label={"패스워드"}
                    _onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type={"password"} label={"패스워드 확인"}
                    _onChange={(e) => setPasswordCheck(e.target.value)}
                />
                <Input
                    label={"이름"}
                    _onChange={(e) => setName(e.target.value)}
                />

                <s.SelectContainer>
                    <Text bold>연령대</Text>
                    <s.SelectBox onChange={(e) => setAgeRange(e.target.value)}>
                        <s.RadioBox>
                            <input type={"radio"} value={10} name={"ageRange"} />
                            <label htmlFor={"10"} style={{margin: "0px 0px 0px 10px"}}>10대 이하</label>
                        </s.RadioBox>
                        <s.RadioBox>
                            <input type={"radio"} value={20} name={"ageRange"} />
                            <label htmlFor={"20"} style={{margin: "0px 0px 0px 10px"}}>20대</label>
                        </s.RadioBox>
                        <s.RadioBox>
                            <input type={"radio"} value={30} name={"ageRange"} />
                            <label htmlFor={"30"} style={{margin: "0px 0px 0px 10px"}}>30대</label>
                        </s.RadioBox>
                        <s.RadioBox>
                            <input type={"radio"} value={40} name={"ageRange"} />
                            <label htmlFor={"40"} style={{margin: "0px 0px 0px 10px"}}>40대</label>
                        </s.RadioBox>
                        <s.RadioBox>
                            <input type={"radio"} value={50} name={"ageRange"} />
                            <label htmlFor={"50"} style={{margin: "0px 0px 0px 10px"}}>50대 이상</label>
                        </s.RadioBox>
                    </s.SelectBox>
                </s.SelectContainer>

                <s.SelectContainer>
                    <Text bold>성별</Text>
                    <s.SelectBox onChange={(e) => setGender(e.target.value)}>
                        <s.RadioBox>
                            <input type={"radio"} value={"male"} name={"gender"} />
                            <label htmlFor={"male"} style={{margin: "0px 0px 0px 10px"}}>남성</label>
                        </s.RadioBox>
                        <s.RadioBox>
                            <input type={"radio"} value={"female"} name={"gender"} />
                            <label htmlFor={"female"} style={{margin: "0px 0px 0px 10px"}}>여성</label>
                        </s.RadioBox>
                    </s.SelectBox>
                </s.SelectContainer>
                <Input
                    label={"닉네임"}
                    _onChange={(e) => setNickname(e.target.value)}
                />
                <SearchHomeyGym />
            </div>
            <Button
                type={"submit"} padding={"10px"}
                _onClick={() => signUpMutate()}
            >회원가입</Button>
        </s.GridBox>
    )
}

export default SignUp