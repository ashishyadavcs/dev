import Ashish from "@/components/ashish";
import Sidebar from "@/components/sidebar";
import Toc from "@/components/tableofcontent";
import Share from "@/components/ui/share";
import { getCategoryDetails, getPostList, getSinglePost } from "lib/posts";
import { NextSeo } from "next-seo";
import Image from "next/image";
import styles from "@/styles/blog.module.css";
import { useRouter } from "next/router";
import Post from "@/components/post";
import Link from "next/link";
const Blog = ({ posts, category }) => {
  const router = useRouter();
  return (
    <main className={`${styles.blog} mainscrollbar mb-4`}>
      <Share />
      <div className={styles.postbanner}>
        <h1 className="p-2">{category.name}</h1>
      </div>
      <div className="container my-4">
        <div className={styles.items}>
          {posts?.length > 0 ? (
            posts?.map((post) => {
              return <Post key={post._id} post={post} styles={styles} />;
            })
          ) : (
            <div className="w-100 d-flex justify-content-between">
              <p className="text-center">No Post</p>
              <Link href="/tutorial">
                <a className="theme-btn">go home</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
export default Blog;
export async function getServerSideProps({ params }) {
  const posts = await getPostList(null, {
    key: "categoryName",
    value: params.slug,
  });
  const data = await getCategoryDetails(params.slug);

  return {
    props: {
      posts: posts.nodes,
      category: data,
    },
  };
}
