import { usePostsQuery } from "../query";
const Fetch = () => {
  const { data: posts, error, isLoading } = usePostsQuery("");
  return (
    <div className="container">
      <h1 className="my-4 text-center">Latest Posts</h1>
      {posts?.map((post, i) => {
        return (
          <div key={i} className="post rounded-3 p-5 mb-3 shadow">
            <h2>
              {post.id}.{post.title}
            </h2>
            <p>{post.body}</p>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};
export default Fetch;
