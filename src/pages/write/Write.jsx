import * as s from './Write.style'
import Input from "../../element/Input";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {write} from "../../shared/api/api";
import FileUpload from "../../component/fileupload/FileUpload";
import s3Upload from "../../shared/S3Upload";
import {setFile} from "../../store/fileSlice";

const Write = () => {
    const dispatch = useDispatch()
    const file = useSelector((state) => state.file)
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {mutate} = useMutation((imgUri) => write({
        title: title,
        content: content,
        username: user.current,
        imgUri: imgUri
    }), {
        onSuccess: (data) => navigate(`/detail/${data.result.id}`) })

    const writeMutate = async () => {
        if (title !== '' && content !== '') {
            let imgUri = '';
            if (file.file !== '') {
                imgUri = await s3Upload(file.file)
            }
            console.log(imgUri)
            mutate(imgUri)
            dispatch(setFile(''))
        } else {
            alert('입력을 확인해주세요.')
        }
    }

    return (
        <s.GridBox>
            <div style={{width: "80%"}}>
                <Input label={"작성자"} value={user.current} disabled />
                <Input
                    label={"제목"}
                    _onChange={(e) => setTitle(e.target.value)}
                />
                <FileUpload />
                <Input
                    multiLine label={"내용"}
                    _onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <s.ButtonBox>
                <Button
                    type={"submit"} padding={"10px"}
                    _onClick={() => writeMutate()}
                >작성</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                    _onClick={() => navigate('/')}
                >목록</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default Write