import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        current: '',
        position: {
            x: 0,
            y: 0
        }
    },
    reducers: {
        setUserUp(state, action) {
            state.current = action.payload
        },
        setUserPosition(state, action) {
            state.position.x = action.payload.x
            state.position.y = action.payload.y
        },
    }
})

export const {setUserUp, setUserPosition} = user.actions

export default user