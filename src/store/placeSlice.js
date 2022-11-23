import {createSlice} from "@reduxjs/toolkit";

const place = createSlice({
    name: 'place',
    initialState: {
        place: {
            placeName: '',
            roadAddressName: '',
            categoryName: '',
            x: '',
            y: ''
        }
    },
    reducers: {
        setWritePlace(state, action) {
            state.place = action.payload
        },
    }
})

export const {setWritePlace} = place.actions

export default place