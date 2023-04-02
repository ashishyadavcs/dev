import { memo } from "react";
import Post from "./post";
const Blogpost = ({ posts }) => {
  return (
    <>
      {posts.length > 0 &&
        posts.map((post, i) => <Post key={i} styles={""} post={post} />)}
    </>
  );
};
export default memo(Blogpost);
