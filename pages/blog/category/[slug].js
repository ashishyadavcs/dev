import {
  getCategoryDetails,
  getCategorySlugs,
  getPostList,
  getSinglePost,
} from "lib/posts";
import { NextSeo } from "next-seo";
import Image from "next/image";
import styles from "@/styles/blog.module.css";
import { useRouter } from "next/router";
import Post from "@/components/post";
import Link from "next/link";
import dynamic from "next/dynamic";
const Share = dynamic(() => import("@/components/ui/share"), {
  ssr: false,
});
const Blog = ({ posts, category }) => {
  const router = useRouter();
  return (
    <>
      {category && (
        <main className={`${styles.blog} mainscrollbar mb-4`}>
          <NextSeo
            title={`Frontendzone | ${category.name}`}
            additionalMetaTags={[
              {
                name: "keywords",
                content: category?.name,
              },
            ]}
            canonical={`${process.env.NEXT_PUBLIC_APP_URL}/blog/category/${category?.slug}`}
          />
          <Share />
          <div className={styles.postbanner}>
            <h1 className="p-2">{category.name}</h1>
          </div>
          <div className="container my-4">
            <div className={styles.items}>
              {posts?.length > 0 &&
                posts?.map((post) => {
                  return <Post key={post._id} post={post} styles={styles} />;
                })}
            </div>
            {posts.length == 0 && (
              <div className="w-100 d-flex justify-content-between">
                <p className="text-center">No Post</p>
                <Link href="/blog">
                  <a className="theme-btn">go home</a>
                </Link>
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
};
export default Blog;
export async function getStaticPaths() {
  const categories = await getCategorySlugs();
  const paths = categories.map((post) => ({
    params: { slug: post.params.categoryName },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params }) {
  const posts = await getPostList(null, {
    key: "categoryName",
    value: params.slug,
  });
  const data = await getCategoryDetails(params.slug);
  if (data == undefined)
    return {
      notFound: true,
    };
  return {
    props: {
      posts: posts.nodes,
      category: data,
    },
    revalidate: 10,
  };
}
