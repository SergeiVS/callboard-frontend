import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsState, Posts } from "./types";

const initialState: PostsState = {
  userPosts: [],
  isPending: false,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setUserPosts(state, action: PayloadAction<Posts[]>) {
      state.userPosts = action.payload;
    },
    addNewPost(state, action: PayloadAction<Posts>) {
      state.userPosts.push(action.payload);
    },
    setPending(state, action: PayloadAction<boolean>) {
      state.isPending = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setUserPosts, addNewPost, setPending, setError } = postsSlice.actions;
export default postsSlice.reducer;