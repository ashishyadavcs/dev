import Post from "./post";
import styles from "@/styles/blog.module.css";
const Relatedposts = ({ posts }) => {
  return (
    <>
      <h2 className=" related">Related Posts</h2>
      <div className={`${styles.relatedposts}`}>
        {posts?.length > 0 &&
          posts?.map((post) => {
            return <Post key={post.slug} post={post} styles={styles} />;
          })}
      </div>
    </>
  );
};

export default Relatedposts;
