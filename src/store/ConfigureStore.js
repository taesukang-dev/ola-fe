import {configureStore} from "@reduxjs/toolkit";
import user from "./userSlice";
import alarm from "./alarmModalSlice";
import page from "./pageSlice";
import keyword from "./keywordSlice";

export default configureStore({
    reducer: {
        user: user.reducer,
        alarm: alarm.reducer,
        page: page.reducer,
        keyword: keyword.reducer,
    }
})