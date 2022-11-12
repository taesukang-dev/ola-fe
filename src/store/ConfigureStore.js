import {configureStore} from "@reduxjs/toolkit";
import user from "./userSlice";
import alarm from "./alarmModalSlice";
import page from "./pageSlice";

export default configureStore({
    reducer: {
        user: user.reducer,
        alarm: alarm.reducer,
        page: page.reducer,
    }
})