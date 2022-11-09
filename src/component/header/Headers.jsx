import {useDispatch, useSelector} from "react-redux";
import {getCookie} from "../../shared/Cookie";
import UnSignedHeader from "./UnSignedHeader";
import SignedHeader from "./SignedHeader";
import {useQuery} from "@tanstack/react-query";
import {userInfo} from "../../shared/api/api";
import {setUserUp} from "../../store/userSlice";

const Headers = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useQuery(['user'], () => userInfo(), {
        onSuccess:(data) => dispatch(setUserUp(data.result.userId)),
        enabled: !!getCookie('x_auth') && user.current === ''
    })

    if (user.current !== '' && getCookie('x_auth')) {
        return <SignedHeader />
    } else {
        return <UnSignedHeader />
    }
}

export default Headers