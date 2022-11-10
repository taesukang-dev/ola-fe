import {createSlice} from "@reduxjs/toolkit";

const alarm = createSlice({
    name: 'alarm',
    initialState: {current: false},
    reducers: {
        setView(state, action) {
            state.current = action.payload
        },
    }
})

export const {setView} = alarm.actions

export default alarm