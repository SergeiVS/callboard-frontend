import PostCard from "components/PostCard/PostCard";
import { useAppSelector } from "store/hooks";
import { PageWrapper } from "./styles";
import { PostsWrapper } from "pages/AllPosts/styles";
import postsSlice from "store/redux/postsSlice/postsSlice";


export function MyPosts() {
  const userPosts = useAppSelector((state) => state.posts.userPosts);
  console.log("User Posts:", userPosts);
  return (

    <PageWrapper>
      <PostsWrapper>
      {userPosts.map((posts) => (
        <PostCard
          key={posts.id}
          header={posts.header}
          description={posts.description}
          image={posts.photoLink} contactInfo={""}    />
      ))}
      </PostsWrapper>
    </PageWrapper>
     
  );
}
export default MyPosts
