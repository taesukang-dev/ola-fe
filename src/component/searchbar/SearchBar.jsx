import Input from "../../element/Input";
import Button from "../../element/Button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setPostKeyword} from "../../store/keywordSlice";

const SearchBar = ({type}) => {
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState('제목')

    return (
        <div style={{width: "80%", display: "flex", justifyContent: "center", alignItems: "center", gap:"10px", margin: "10px 0px"}}>
            {
                type === 'teamPost' &&
                <select style={{padding: "10px"}} onChange={(e) => setKeyword(e.target.value)}>
                    <option value={"제목"}>제목</option>
                    <option value={"장소"}>장소</option>
                </select>
            }
            <div>
                <Input
                    _onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <Button
                padding={"10px"}
                _onClick={() => dispatch(setPostKeyword(keyword))}
            >검색</Button>
        </div>
    )
}

export default SearchBar