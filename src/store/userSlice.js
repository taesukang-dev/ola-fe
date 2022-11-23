import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        current: '',
        position: {
            x: 0,
            y: 0
        },
        place: {
            placeName: '',
            roadAddressName: '',
            categoryName: '',
            x: '',
            y: ''
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
        setSignUpPlace(state, action) {
            state.place = action.payload
        }
    }
})

export const {setUserUp, setUserPosition, setSignUpPlace} = user.actions

export default user