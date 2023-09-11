import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import blogReducer from '../features/blog/blogSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        blog: blogReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>