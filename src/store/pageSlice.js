import {createSlice} from "@reduxjs/toolkit";

const page = createSlice({
    name: 'page',
    initialState: {
        post: 0,
        teamPost: 0,
        locationPost: 0,
    },
    reducers: {
        setPostPage(state, action) {
            state.post = action.payload
        },
        setTeamPostPage(state, action) {
            state.teamPost = action.payload
        },
        setLocationPostPage(state, action) {
            state.locationPost = action.payload
        },
    }
})

export const {setPostPage, setTeamPostPage, setLocationPostPage} = page.actions

export default page