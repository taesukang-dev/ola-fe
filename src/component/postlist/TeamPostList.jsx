import * as s from "./PostList.style";
import {useEffect} from "react";
import TeamPostColumn from "./TeamPostColumn";

const TeamPostList = ({ teamPostList }) => {
    useEffect(() => {
        console.log(teamPostList)
    }, [teamPostList])
    return (
        <s.GridContainer>
            <s.GridBox>
                <s.TitleBox>
                    <s.Text
                        whileHover={{
                            color: "#1b29f7",
                            cursor: "pointer",
                        }}
                    >팀 모집
                    </s.Text>
                </s.TitleBox>
                {
                    teamPostList &&
                    teamPostList.map(
                        (e, i) =>
                            <TeamPostColumn
                                key={i}
                                id={e.id}
                                title={e.title}
                                nickname={e.user.nickname}
                                registeredAt={e.registeredAt.split('T')[0]}
                                status={e.status}
                            />
                    )
                }
            </s.GridBox>
        </s.GridContainer>
    )
}

export default TeamPostList