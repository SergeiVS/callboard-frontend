import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsState, Posts } from "./types";

const initialState = {
  userPosts: [],
 
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    userPosts: [] as Posts[],
    },
  reducers: {
     addPost(state, action: PayloadAction<Posts>) {
       state.userPosts.push(action.payload);
     },
  },
});

export const {  addPost  } = postsSlice.actions;
export default postsSlice.reducer;