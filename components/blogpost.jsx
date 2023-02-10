import { getPostList } from "lib/posts";
import { memo, useEffect, useState } from "react";
import Post from "./post";
const Blogpost = () => {
  const [posts, setposts] = useState([]);
  const fetchPost = async () => {
    const data = await getPostList();
    setposts([...data.nodes.slice(0, 3)]);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      {posts.length > 0 &&
        posts.map((post, i) => <Post key={i} styles={""} post={post} />)}
    </>
  );
};
export default memo(Blogpost);
