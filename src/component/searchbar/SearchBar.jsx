import Input from "../../element/Input";
import Button from "../../element/Button";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {setPlace, setPostKeyword, setTeamPostKeyword} from "../../store/keywordSlice";
import {useQueryClient} from "@tanstack/react-query";

const SearchBar = ({type}) => {
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const inputRef = useRef()
    const [keyword, setKeyword] = useState('')

    const handleSearch = () => {
        if (keyword.replace(/ /gi, '').length === 0) {
            alert('공백은 검색할 수 없습니다.')
            return
        }
        if (type === "post") {
            inputRef.current.value = ''
            queryClient.invalidateQueries('postList')
            dispatch(setPostKeyword(keyword));
        } else {
            inputRef.current.value = ''
            queryClient.invalidateQueries('teamPostList')
            dispatch(setTeamPostKeyword(keyword))
        }
    }

    return (
        <div style={{width: "80%", display: "flex", justifyContent: "center", alignItems: "center", gap:"10px", margin: "10px 0px"}}>
            {
                type === 'teamPost' &&
                <select style={{padding: "10px"}} onChange={(e) => dispatch(setPlace(e.target.value))}>
                    <option value={"제목"}>제목</option>
                    <option value={"장소"}>장소</option>
                </select>
            }
            <div>
                <Input
                    _ref={inputRef}
                    _onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <Button
                padding={"10px"}
                _onClick={handleSearch}
            >검색</Button>
        </div>
    )
}

export default SearchBar