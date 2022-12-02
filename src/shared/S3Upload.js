import AWS from "aws-sdk";
import {v1} from "uuid";

const S3Upload = async (file) => {
    let uri = '';
    const upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: process.env.REACT_APP_AWS_BUCKET,
            Key: `images/${v1().toString().replace('-', '')}.${file.type.split('/')[1]}`,
            Body: file,
        },
    })

    const promise = upload.promise()

    await promise.then(
        function (data) {
            uri = data.Key.split('/')[1]
        },
        function (err) {
            return alert("이미지 업로드에 실패했어요.")
        }
    )
    return uri
}

export default S3Upload