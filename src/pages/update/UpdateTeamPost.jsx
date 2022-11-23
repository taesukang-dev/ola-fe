import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Input from "../../element/Input";
import * as s from './Update.style'
import Text from "../../element/Text";
import Button from "../../element/Button";
import {useDispatch, useSelector} from "react-redux";
import {useMutation} from "@tanstack/react-query";
import {updateTeamPost} from "../../shared/api/api";
import FileUpload from "../../component/fileupload/FileUpload";
import s3Upload from "../../shared/S3Upload";
import {setFile} from "../../store/fileSlice";
import SearchHomeyGym from "../../component/searchhomegym/SearchHomeyGym";
import {setWritePlace} from "../../store/placeSlice";

const UpdateTeamPost = () => {
    const place = useSelector((state) => state.place).place
    const dispatch = useDispatch()
    const file = useSelector((state) => state.file)
    const navigate = useNavigate()
    const id = useParams().id
    const user = useSelector((state) => state.user)
    const location = useLocation().state.data;
    const [updateTitle, setUpdateTitle] = useState(location.title)
    const [updateLimits, setUpdateLimits] = useState(location.limits)
    const [updateContent, setUpdateContent] = useState(location.content)

    const {mutate} = useMutation((param) => updateTeamPost(param), {
        onSuccess: (data) => navigate(`/detail/team/${id}`) })

    const teamPostUpdateMutate = async () => {
        if (updateTitle.replace(/ /gi, '').length === 0 ||
            updateContent.replace(/ /gi, '').length === 0) {
            alert('공백은 불가합니다.')
            return
        }
        if (updateTitle === location.title &&
            updateLimits === location.limits &&
            updateContent === location.content &&
            place.placeName === '') {
            alert('수정되지 않았습니다.')
            return
        }
        let imgUri = '';
        if (file.file !== '') {
             imgUri = await s3Upload(file.file)
        }

        mutate({
            id: id,
            title: updateTitle,
            content: updateContent,
            homeGymRequest: place,
            limits: updateLimits,
            imgUri: imgUri === '' ? location.imgUri : imgUri
        })

        dispatch(setFile(''))
        dispatch(setWritePlace({
            placeName: '',
            roadAddressName: '',
            categoryName: '',
            x: '',
            y: ''
        }))
    }

    return (
        <s.GridBox>
            <div style={{width: "80%"}}>
                <Input label={"작성자"} value={user.current} disabled />
                <Input
                    label={"제목"}
                    defaultValue={location.title}
                    _onChange={(e) => setUpdateTitle(e.target.value)}
                />
                <SearchHomeyGym title={"teamPost"} updateParam={location.place.placeName} />
                <div>
                    <FileUpload src={`${process.env.REACT_APP_AWS_PATH}/${location.imgUri}`} />
                </div>
                <s.SelectContainer onChange={(e) => setUpdateLimits(e.target.value)}>
                    <Text bold>인원</Text>
                    <s.SelectBox>
                        <s.RadioBox>
                            <input type={"radio"} value={2} name={"limits"} defaultChecked={location.limits === 2}/>
                            <label htmlFor={"2"} style={{margin: "0px 0px 0px 10px"}}>2명</label>
                        </s.RadioBox>
                        <s.RadioBox>
                            <input type={"radio"} value={3} name={"limits"} defaultChecked={location.limits === 3}/>
                            <label htmlFor={'3'} style={{margin: "0px 0px 0px 10px"}}>3명</label>
                        </s.RadioBox>
                        <s.RadioBox>
                            <input type={"radio"} value={4} name={"limits"} defaultChecked={location.limits === 4}/>
                            <label htmlFor={'4'} style={{margin: "0px 0px 0px 10px"}}>4명</label>
                        </s.RadioBox>
                        <s.RadioBox>
                            <input type={"radio"} value={5} name={"limits"} defaultChecked={location.limits === 5}/>
                            <label htmlFor={'5'} style={{margin: "0px 0px 0px 10px"}}>5명</label>
                        </s.RadioBox>
                    </s.SelectBox>
                </s.SelectContainer>
                <Input
                    multiLine label={"내용"}
                    defaultValue={location.content}
                    _onChange={(e) => setUpdateContent(e.target.value)}
                />
            </div>
            <s.ButtonBox>
                <Button
                    type={"submit"} padding={"10px"}
                    _onClick={() => teamPostUpdateMutate()}
                >수정완료</Button>
                <Button
                    type={"submit"} padding={"10px"} margin={"0px 0px 0px 10px"}
                >목록</Button>
            </s.ButtonBox>
        </s.GridBox>
    )
}

export default UpdateTeamPost