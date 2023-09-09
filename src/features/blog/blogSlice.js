import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blog: 0
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        create: (state) => {
          state.blog += 1;
        },
        // update: (state) => {

        // },
        // delete: (state) => {

        // },
    }
})

export const { create } = blogSlice.actions;

export default blogSlice.reducer;