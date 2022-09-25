import { createSlice } from '@reduxjs/toolkit';

const initialState = '';
let timeoutID;
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        openNotification(state, action) {
            return action.payload;
        },

        closeNotification(state, action) {
            return '';
        },
    },
});

export const { openNotification, closeNotification } =
    notificationSlice.actions;

export const setNotification = (content, time) => {
    return async (dispatch) => {
        clearTimeout(timeoutID);
        dispatch(openNotification(content));
        timeoutID = setTimeout(() => {
            dispatch(closeNotification());
        }, time * 1000);
    };
};

export default notificationSlice.reducer;
