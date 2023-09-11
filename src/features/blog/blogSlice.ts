import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

// ====== interfaces ======
interface Blog {
  id: number;
  title: string;
  content: string;
}
interface BlogState {
  blogs: Blog[];
}
// ========================

const initialState: BlogState = {
  blogs: [
    { id: 1, title: 'First Post!', content: `Hello, world! This is my first blog post, and I'm excited to start sharing my thoughts with you. I've always been passionate about this topic, and I can't wait to dive deep into it in future posts.` },
    { id: 2, title: 'Second Post', content: `Welcome back to my blog. Today, I'd like to delve into a topic that has always fascinated me. It's a broad subject, so I'll be covering it over several posts, starting with the basics.` },
    { id: 3, title: 'Third Post', content: `In this post, I want to discuss a subject that is close to my heart and has shaped my life in many ways. I'll share personal stories and experiences to illustrate my points, so get ready for a heartfelt journey.` },
    { id: 4, title: 'Fourth Post', content: `Let's keep it short and sweet today. Here are some quick thoughts on a current trend that I find interesting. I'll be exploring this topic in more detail in future posts, so stay tuned for a deep dive.` },
    { id: 5, title: 'Fifth Post', content: `Today's post is all about sharing a brief update on my recent experiences.` },
  ]
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        create: (state) => {
            // state.push({id: 3, title: 'Third Post', content: 'More text'})
        },
    }
})

export const selectAllBlogs = (state: RootState) => state.blog.blogs

export const { create } = blogSlice.actions;

export default blogSlice.reducer;