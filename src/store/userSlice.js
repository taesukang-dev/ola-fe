import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {current: ''},
    reducers: {
        setUserUp(state, action) {
            state.current = action.payload
        },
    }
})

export const {setUserUp} = user.actions

export default user