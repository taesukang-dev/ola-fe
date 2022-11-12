import * as s from './UpdateInfo.style'
import Text from "../../element/Text";
import Input from "../../element/Input";
import Button from "../../element/Button";
import {useMutation, useQuery} from "@tanstack/react-query";
import {updateUser, userInfo} from "../../shared/api/api";
import {useEffect, useState} from "react";

const UpdateInfo = () => {
    const {data} = useQuery(['user'], () => userInfo())
    const [updateName, setUpdateName] = useState('')
    const [updateNickname, setUpdateNickname] = useState('')
    const [updateHomeGym, setUpdateHomeGym] = useState('')

    const {mutate} = useMutation((param) => updateUser(param))

    useEffect(() => {
        setUpdateName(data?.result.name)
        setUpdateNickname(data?.result.nickname)
        setUpdateHomeGym(data?.result.homeGym)
    },[data])

    const userUpdateMutate = () => {
        if (updateName.replace(/ /gi, '').length === 0 ||
            updateNickname.replace(/ /gi, '').length === 0 ||
            updateHomeGym.replace(/ /gi, '').length === 0) {
            alert('공백은 불가합니다.')
            return
        }
        if (updateName === data?.result.name &&
            updateNickname === data?.result.nickname &&
            updateHomeGym === data?.result.homeGym) {
            alert('수정되지 않았습니다.')
            return
        }
        mutate({
            name: updateName,
            nickname: updateNickname,
            homeGym: updateHomeGym
        });
    }


    return (
        <s.GridBox>
            <Text fontSize={"32px"} bold>내 정보</Text>
            <div style={{width: "80%"}}>
                <Input
                    label={"아이디"}
                    value={data?.result.userId}
                    disabled/>
                <Input
                    label={"이름"}
                    defaultValue={data?.result.name}
                    _onChange={(e) => setUpdateName(e.target.value)}
                />
                <Input
                    label={"닉네임"}
                    defaultValue={data?.result.nickname}
                    _onChange={(e) => setUpdateNickname(e.target.value)}
                />
                <Input
                    label={"홈짐 혹은 자주 가는 암장"}
                    defaultValue={data?.result.homeGym}
                    _onChange={(e) => setUpdateHomeGym(e.target.value)}
                />
            </div>
            <s.ButtonBox>
                <Button
                    padding={"10px"}
                    _onClick={() => userUpdateMutate()}
                >수정 완료</Button>
                <Button
                    type={"submit"} padding={"10px"}
                >회원가입</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default UpdateInfo