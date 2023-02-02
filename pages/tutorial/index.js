import React from "react";
import styles from "@/styles/blog.module.css";
import { toast } from "react-toastify";
import Sidebar from "@/components/sidebar";
import Post from "@/components/post";
import { getCategorySlugs, getPostList } from "lib/posts";
const Blog = ({ posts, categories }) => {
  return (
    <div className={`${styles.blog} container my-4`}>
      <div className="row">
        <div className="col-md-8">
          <div className={styles.items}>
            {posts?.length > 0 &&
              posts?.map((post) => {
                return <Post key={post.slug} post={post} styles={styles} />;
              })}
          </div>
        </div>
        <div className="col-md-4">
          <Sidebar categories={categories} styles={styles} />
        </div>
      </div>
    </div>
  );
};
export default Blog;
export async function getStaticProps() {
  const data = await getPostList();
  const categories = await getCategorySlugs();
  return {
    props: {
      posts: data.nodes,
      categories,
    },
  };
}
