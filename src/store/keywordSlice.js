import {createSlice} from "@reduxjs/toolkit";

const keyword = createSlice({
    name: 'keyword',
    initialState: {
        post: '',
        teamPost: '',
        place: ''
    },
    reducers: {
        setPostKeyword(state, action) {
            state.post = action.payload
        },
        setTeamPostKeyword(state, action) {
            state.teamPost = action.payload
        },
        setPlace(state, action) {
            state.place = action.payload
        },
    }
})

export const {setPostKeyword, setTeamPostKeyword, setPlace} = keyword.actions

export default keyword