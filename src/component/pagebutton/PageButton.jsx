import Button from "../../element/Button";
import {useDispatch, useSelector} from "react-redux";
import {setPostPage, setTeamPostPage} from "../../store/pageSlice";

const PageButton = ({buttonList, type}) => {
    const dispatch = useDispatch()
    const page = useSelector((state) => state.page)

    const handlePage = (e) => {
        if (type === "post") {
            dispatch(setPostPage(e));
        } else {
            dispatch(setTeamPostPage(e))
        }
    }

    return (
        <div>
            {
                buttonList.map((e, i) =>
                    <Button
                        key={i}
                        margin={"0px 1px"}
                        _onClick={() => handlePage(e)}
                        warn={ type === "post"
                                ? e === page.post ? "true" : "false"
                                : e === page.teamPost ? "true" : "false"}
                    >{e + 1}
                    </Button>
                )
            }
        </div>
    )
}

export default PageButton