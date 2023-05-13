import { getPostList } from "lib/posts";
import { memo, useState } from "react";
import Post from "./post";
import Inpostad from "./ads/inpostad";
const Loadmore = ({ pageInfo }) => {
  const [more, setmore] = useState({ posts: [], pageInfo });
  const loadmore = async (e) => {
    const button = e.target;
    if (button) button.innerText = "loading...";
    const posts = await getPostList(more.pageInfo.endCursor);
    await setmore((prev) => ({
      posts: [...prev.posts, ...posts.nodes],
      pageInfo: posts.pageInfo,
    }));
    if (button) button.innerText = "load more";
  };

  return (
    <>
      {more?.posts?.length > 0 &&
        more?.posts?.map((post,i) => {
          return <>
          {i%3==0?<Inpostad/>:<Post key={post.slug} post={post}  />}
          </>
        })}
      {more.pageInfo.hasNextPage && (
        <button
          onClick={(e) => loadmore(e)}
          className="theme-btn mx-auto d-block"
        >
          load more
        </button>
      )}
    </>
  );
};

export default memo(Loadmore);
