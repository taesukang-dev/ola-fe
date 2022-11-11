import * as s from './AlarmModal.style'
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteAlarms, getAlarms} from "../../shared/api/api";
import {useDispatch, useSelector} from "react-redux";
import {setView} from "../../store/alarmModalSlice";

const AlarmModal = () => {
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const alarm = useSelector((state) => state.alarm)
    const {data} = useQuery(['alarms'], () => getAlarms())
    const {mutate} = useMutation((alarmId) => deleteAlarms(alarmId), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('alarms')
        }
    })

    if (!data?.result.length) {
        return(
            <s.AlarmModal>
                <s.AlarmColumn>알람이 없어요!</s.AlarmColumn>
            </s.AlarmModal>
        )
    }

    return (
        <s.AlarmModal>
            {
                data?.result.map((e, i) =>
                    <s.AlarmColumn
                        key={i}
                        onClick={() =>{
                            e.alarmType === 'COMMENT' ? window.location.href=`/detail/${e.postId}`
                                :  window.location.href=`/detail/team/${e.postId}`
                            mutate(e.id)
                            dispatch(setView(!alarm.current))
                        }}
                    >
                        NEW {e.alarmType}
                    </s.AlarmColumn>
                )
            }
        </s.AlarmModal>
    );
}
export default AlarmModal