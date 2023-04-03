import { memo, useEffect, useState } from "react";
import Post from "./post";
import { getPostList } from "lib/posts";
import { FiLoader } from "react-icons/fi";
const Blogpost = () => {
  const [posts, setposts] = useState([]);
  const fetchPosts = async () => {
    return await getPostList();
  };
  useEffect(() => {
    fetchPosts().then((res) => setposts(res.nodes.splice(0, 3)));
  }, []);

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post, i) => <Post key={i} styles={""} post={post} />)
      ) : (
        <div className="my-4">
          <FiLoader size={30} className="d-block mx-auto" />
        </div>
      )}
    </>
  );
};
export default memo(Blogpost);
