import {useSelector} from "react-redux";
import {getCookie} from "../../shared/Cookie";
import UnSignedHeader from "./UnSignedHeader";
import SignedHeader from "./SignedHeader";

const Headers = () => {
    const user = useSelector((state) => state.user)

    if (user.current !== '' && getCookie('x_auth')) {
        return <SignedHeader />
    } else {
        return <UnSignedHeader />
    }
}

export default Headers