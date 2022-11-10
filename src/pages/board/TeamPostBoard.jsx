import * as s from './PostBoard.style'
import {useQuery} from "@tanstack/react-query";
import {getTeamPostList} from "../../shared/api/api";
import TeamPostList from "../../component/postlist/TeamPostList";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";

const TeamPostBoard = () => {
    const navigate = useNavigate()
    const {data} = useQuery(['teamPostList'], () => getTeamPostList())

        return (
            <s.GridContainer>
                {data && <TeamPostList teamPostList={data.result} board={true}/>}
                <s.GridBox>
                    <Button
                        padding={"10px"}
                        _onClick={() => navigate("/write/team")}
                    >글작성</Button>
                </s.GridBox>
            </s.GridContainer>
        )
}

export default TeamPostBoard