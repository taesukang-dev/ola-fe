import * as s from './WaitList.style'
import Text from "../../element/Text";
import {useSelector} from "react-redux";
import AddMember from "../addmember/AddMember";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {addMember, deleteWaitListMember, getWaitList} from "../../shared/api/api";
import Button from "../../element/Button";

const WaitList = ({id, member, userId, limits}) => {
    const user = useSelector((state) => state.user)
    const queryClient = useQueryClient()
    const {data} = useQuery(['waitList'], () => getWaitList(id))

    const {mutate} = useMutation((memberId) => deleteWaitListMember(id, memberId), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('waitList')
        }
    })

    const addMemberMutate = useMutation((memberId) => addMember(id, memberId), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('members')
        }
    })

    return (
        <s.WaitListBox>
            <s.TitleBox>
                <Text bold color={"black"}>대기열</Text>
                {
                    user.current !== userId &&
                    <AddMember id={id} userId={userId} waitList={data?.result} member={member} />
                }
            </s.TitleBox>
            <s.MemberCardContainer>
                {
                    data &&
                    data?.result.map((e, i) => {
                        return (
                            <s.MemberCardBox
                                key={i}>
                                <s.MemberCard>
                                    <s.MemberBox
                                        url={"https://m.media-amazon.com/images/M/MV5BMTgxMDkzMDM1OF5BMl5BanBnXkFtZTgwMzI3NTE2NTE@._V1_.jpg"}
                                    />
                                    {e.nickname} ({e.ageRange}대, {e.homeGym})
                                </s.MemberCard>
                                {
                                    (e.userId === user.current ||
                                    userId === user.current) &&
                                    <Button
                                        padding={"5px 10px"}
                                        fontSize={"10px"}
                                        bg={"#d1312d"}
                                        color={"white"}
                                        bold={"true"}
                                        _onClick={() => mutate(e.id)}
                                    >
                                        취소
                                    </Button>
                                }
                                {
                                    limits - member.length > 0 &&
                                    userId === user.current &&
                                    e.userId !== user.current &&
                                        <Button
                                            padding={"5px 10px"}
                                            fontSize={"10px"}
                                            bg={"#d1312d"}
                                            color={"white"}
                                            bold={"true"}
                                            _onClick={() => addMemberMutate.mutate(e.id)}
                                        >
                                            합류
                                        </Button>
                                }

                            </s.MemberCardBox>)
                    })
                }
            </s.MemberCardContainer>
        </s.WaitListBox>
    )
}

export default WaitList