import {createSlice} from "@reduxjs/toolkit";

const keyword = createSlice({
    name: 'keyword',
    initialState: {post: ''},
    reducers: {
        setPostKeyword(state, action) {
            state.post = action.payload
        },
    }
})

export const {setPostKeyword} = keyword.actions

export default keyword