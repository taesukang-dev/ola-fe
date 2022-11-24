import Button from "../../element/Button";
import {useDispatch, useSelector} from "react-redux";
import {setLocationPostPage, setPostPage, setTeamPostPage} from "../../store/pageSlice";

const PageButton = ({buttonList, type}) => {
    const dispatch = useDispatch()
    const page = useSelector((state) => state.page)

    const handlePage = (e) => {
        if (type === "post") {
            dispatch(setPostPage(e));
        } else if (type === 'teamPost') {
            dispatch(setTeamPostPage(e))
        } else if (type === 'locationPost') {
            dispatch(setLocationPostPage(e))
        }
    }
    if (type === "post") {
        return (
            <div>
                {
                    buttonList.map((e, i) =>
                        <Button
                            key={i}
                            margin={"0px 1px"}
                            _onClick={() => handlePage(e)}
                            warn={e === page.post ? "true" : "false"}
                        >{e + 1}
                        </Button>
                    )
                }
            </div>)
    } else if (type === 'teamPost') {
        return (
            <div>
                {
                    buttonList.map((e, i) =>
                        <Button
                            key={i}
                            margin={"0px 1px"}
                            _onClick={() => handlePage(e)}
                            warn={e === page.teamPost ? "true" : "false"}
                        >{e + 1}
                        </Button>
                    )
                }
            </div>)
    } else if (type === 'locationPost') {
        return (
            <div>
                {
                    buttonList.map((e, i) =>
                        <Button
                            key={i}
                            margin={"0px 1px"}
                            _onClick={() => handlePage(e)}
                            warn={e === page.locationPost ? "true" : "false"}
                        >{e + 1}
                        </Button>
                    )
                }
            </div>)
    }
}

export default PageButton