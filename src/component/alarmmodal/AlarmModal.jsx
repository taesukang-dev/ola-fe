import * as s from './AlarmModal.style'
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteAlarms, getAlarms} from "../../shared/api/api";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setView} from "../../store/alarmModalSlice";

const AlarmModal = () => {
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alarm = useSelector((state) => state.alarm)
    const {data} = useQuery(['alarms'], () => getAlarms())
    const {mutate} = useMutation((alarmId) => deleteAlarms(alarmId), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('alarms')
        }
    })

    return (
        <s.AlarmModal>
            {
                data?.result.map((e, i) =>
                    <s.AlarmColumn
                        key={i}
                        onClick={() =>{
                            e.alarmType === 'COMMENT' ? navigate(`/detail/${e.postId}`)
                                : navigate(`/detail/team/${e.postId}`)
                            mutate(e.id)
                            dispatch(setView(!alarm.current))
                        }}
                    >
                        NEW {e.alarmType}
                    </s.AlarmColumn>
                )
            }
            {
                !data?.result.length &&
                <div>
                    알람이 없어요
                </div>
            }
        </s.AlarmModal>
    )
}
export default AlarmModal