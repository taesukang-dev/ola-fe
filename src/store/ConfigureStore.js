import {configureStore} from "@reduxjs/toolkit";
import user from "./userSlice";
import alarm from "./alarmModalSlice";

export default configureStore({
    reducer: {
        user: user.reducer,
        alarm: alarm.reducer,
    }
})