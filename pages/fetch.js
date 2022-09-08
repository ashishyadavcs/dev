import { useState } from "react";

const Fetch = () => {
  const [posts, setposts] = useState();
  const getPosts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await data.json();
    return result;
  };
  getPosts()
    .then((res) => setposts(res))
    .catch((err) => console.log(err));
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
