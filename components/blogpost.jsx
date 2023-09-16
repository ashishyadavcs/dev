import { memo } from "react";
import Post from "./post";
import { FiLoader } from "react-icons/fi";
const Blogpost = ({posts}) => {
  return (
    <>
    {console.log(posts)}
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
