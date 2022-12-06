import * as s from './SearchHomeGym.style'
import Input from "../../element/Input";
import {kakaoPlaceSearch} from "../../shared/api/api";
import {useMemo, useRef, useState} from "react";
import _ from "lodash";
import {useQuery} from "@tanstack/react-query";
import Text from "../../element/Text";
import Button from "../../element/Button";
import {useDispatch} from "react-redux";
import {setSignUpPlace} from "../../store/userSlice";
import {setWritePlace} from "../../store/placeSlice";

const SearchHomeyGym = ({updateParam = '', title = ''}) => {
    const dispatch = useDispatch()
    const [homeGym, setHomeGym] = useState('')
    const [selectedHomeGym, setSelectedHomeGym] = useState(updateParam)
    const inputRef = useRef()

    const onChange = (e) => debouncedSearch(e.target.value);

    const debouncedSearch = useMemo(() => _.debounce((query) => {
        setHomeGym(query)
    }, 200), [homeGym]);

    const {data} = useQuery([homeGym], () => kakaoPlaceSearch(homeGym), {
        enabled: !!homeGym
    })

    const handleSelect = (e) => {
        setSelectedHomeGym(e.place_name)
        const param = {
            placeName: e.place_name,
            roadAddressName: e.road_address_name,
            categoryName: e.category_name,
            x: e.x,
            y: e.y
        }
        if (title === '') {
            dispatch(setSignUpPlace(param));
        } else {
            dispatch(setWritePlace(param))
        }
    }

    return (
        <>
            <s.SearchBox>
                <Input label={title !== '' ? '장소 검색' : "자주 가는 암장 검색"} _onChange={onChange} />
            <s.SearchItemContainer>
                {
                    data &&
                    data?.documents.map((el, i) => {
                        return (
                            el.category_name.split('> ')[1] === '클라이밍' ?
                            <s.SearchItemBox key={i}>
                                <s.TextBox>
                                    <Text bold>{el.place_name}</Text>
                                    <Text fontSize={"10px"}>{el.road_address_name}</Text>
                                        <Text fontSize={"10px"} color={"red"}>{el.category_name}</Text>
                                </s.TextBox>
                                <Button
                                    _onClick={() => handleSelect(el)}
                                >✔</Button>
                            </s.SearchItemBox> : ''
                        )
                    })
                }
            </s.SearchItemContainer>
                <div style={{margin: "10px 0px"}}>
                    <Input
                        _ref={inputRef}
                        disabled
                        value={selectedHomeGym}
                        label={title !== '' ? '장소' : "자주 가는 암장 검색"} _onChange={onChange} />
                </div>
            </s.SearchBox>
        </>
    )
}

export default SearchHomeyGym