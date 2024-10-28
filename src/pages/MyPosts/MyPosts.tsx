import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import axios from "axios";
import PostCard from "components/PostCard/PostCard";
import postsReducer, { setUserPosts } from "../../store/redux/postsSlice/postsSlice";
import { RootState } from "../../store/store";

export function MyPosts() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: RootState) => state.posts?.userPosts || []);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const response = await axios.get("/api/posts", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        dispatch(setUserPosts(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyPosts();
  }, [dispatch]);

  return (
    <div>
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}

export default MyPosts;