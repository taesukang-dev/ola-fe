import * as s from './PostBoard.style'
import {useQuery} from "@tanstack/react-query";
import {getTeamPostList} from "../../shared/api/api";
import TeamPostList from "../../component/postlist/TeamPostList";
import Button from "../../element/Button";
import {useNavigate} from "react-router-dom";
import PageButton from "../../component/pagebutton/PageButton";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const TeamPostBoard = () => {
    const navigate = useNavigate()
    const page = useSelector((state) => state.page)
    const {data, refetch} = useQuery(['teamPostList'], () => getTeamPostList(page.teamPost))

    useEffect(() => {
        refetch()
    }, [page])

        return (
            <s.GridContainer>
                {data && <TeamPostList teamPostList={data.result[0]}/>}
                <s.GridBox>
                    <Button
                        padding={"10px"}
                        _onClick={() => navigate("/write/team")}
                    >글작성</Button>
                </s.GridBox>
                {data && <PageButton buttonList={data?.result[1]} type={"teamPost"}/>}
            </s.GridContainer>
        )
}

export default TeamPostBoard