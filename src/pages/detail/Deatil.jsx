import * as s from './Detail.style'
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getPost} from "../../shared/api/api";
import {useQuery} from "@tanstack/react-query";
import Input from "../../element/Input";
import Button from "../../element/Button";

const Detail = () => {
    const id = useParams().id
    const { data } = useQuery(['post'], () => getPost(id))
    useEffect(() => {
        console.log(data)
    },[data])

    return (
        <s.GridBox>
            <div style={{width: "80%"}}>
                <s.TitleContainer>
                    <s.TitleBox>
                        <div>
                            {data?.result.title}
                        </div>
                        <s.RegisterBox>
                            {data?.result.registeredAt.split('T')[0]}
                        </s.RegisterBox>
                    </s.TitleBox>
                    <s.UserBox>
                        {data?.result.user.userId} ({data?.result.user.homeGym})
                    </s.UserBox>
                </s.TitleContainer>
                <div style={{padding: "16px"}}>
                    {data?.result.content}
                </div>
            </div>
            <s.ButtonBox>
                <Button
                    type={"submit"} padding={"10px"}
                >수정</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                >삭제</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                >목록</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default Detail