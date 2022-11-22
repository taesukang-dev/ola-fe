import AWS from 'aws-sdk'
import Input from "../../element/Input";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {setFile} from "../../store/fileSlice";

const FileUpload = ({src=''}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('region', process.env.REACT_APP_AWS_REGION)
        console.log('identy', process.env.REACT_APP_AWS_IDENTY_POOL_ID)
        AWS.config.update({
            region: process.env.REACT_APP_AWS_REGION,
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: process.env.REACT_APP_AWS_IDENTY_POOL_ID,
            }),
        })
    }, [])

    const fileInput = useRef()
    const [preview, setPreview] = useState('')

    const selectFile = () => {
        const reader = new FileReader()
        const file = fileInput.current.files[0]
        reader.readAsDataURL(file)
        reader.onloadend = (e) => {
            setPreview(e.target.result)
            dispatch(setFile(file))
        }
    }

    return (
    <>
        <Input
            label={"이미지"}
            type={"file"}
            _ref={fileInput}
            _onChange={selectFile}
        />
        {
            preview !== '' &&
            <img width={"100px"} src={preview} alt={"none"}/>
        }
        {
            src &&
            preview === '' &&
            <img
                width={"100px"}
                src={src} alt={"none"}/>
        }
    </>
    )
}

export default FileUpload