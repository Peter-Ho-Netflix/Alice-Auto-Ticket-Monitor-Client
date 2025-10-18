import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
}

export const 抢票任务Slice = createSlice({
    name: '抢票任务',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
    },
})