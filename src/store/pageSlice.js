import {createSlice} from "@reduxjs/toolkit";

const page = createSlice({
    name: 'page',
    initialState: {
        post: 0,
        teamPost: 0
    },
    reducers: {
        setPostPage(state, action) {
            state.post = action.payload
        },
        setTeamPostPage(state, action) {
            state.teamPost = action.payload
        },
    }
})

export const {setPostPage, setTeamPostPage} = page.actions

export default page