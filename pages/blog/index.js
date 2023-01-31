import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/blog.module.css";
import { toast } from "react-toastify";
import Sidebar from "@/components/sidebar";
import Post from "@/components/post";
const Blog = ({ posts }) => {
  return (
    <div className={`${styles.blog} container my-4`}>
      <div className="row">
        <div className="col-md-8">
          <div className={styles.items}>
            {posts?.length > 0 &&
              posts?.map((post) => {
                return (
                  <Link key={post._id} href={`/blog/${post.slug}`} passHref>
                    <Post post={post} styles={styles} />
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="col-md-4">
          <Sidebar styles={styles} />
        </div>
      </div>
    </div>
  );
};
export default Blog;
export async function getServerSideProps() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/post/`)
    .then((res) => res.json())
    .catch((err) => "");
  if (data.posts) {
    return {
      props: {
        posts: data.posts.reverse() || [],
      },
    };
  } else {
    return {
      props: {
        posts: [],
      },
    };
  }
}
