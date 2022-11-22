import {createSlice} from "@reduxjs/toolkit";

const file = createSlice({
    name: 'file',
    initialState: {file : ''},
    reducers: {
        setFile(state, action) {
            state.file = action.payload
        },
    }
})

export const {setFile} = file.actions

export default file