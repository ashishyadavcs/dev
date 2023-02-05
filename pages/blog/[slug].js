import Image from "next/image";
import Toc from "@/components/tableofcontent";
import styles from "../../styles/blog.module.css";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Ashish from "@/components/ashish";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
const Share = dynamic(() => import("@/components/ui/share"), {
  ssr: false,
});

import { getCategorySlugs, getPostList, getSinglePost } from "lib/posts";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Blog = ({ post, categories }) => {
  const router = useRouter();
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      {post && (
        <main className={`${styles.blog} mainscrollbar mb-4`}>
          {post?.title && (
            <NextSeo
              title={post?.title}
              description={` ${post?.excerpt
                .replace(/<[^>]+>/g, "")
                .slice(0, 145)}`}
              canonical={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${post?.slug}`}
              openGraph={{
                type: "article",
                url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`,
                title: post?.title,
                description: ` ${post.excerpt
                  .replace(/<[^>]+>/g, "")
                  .slice(0, 145)}`,

                images: [
                  {
                    url: post?.featuredImage?.node.mediaDetails.sizes[3]
                      .sourceUrl,
                    width:
                      post?.featuredImage?.node.mediaDetails.sizes[3].width,
                    height:
                      post?.featuredImage?.node.mediaDetails.sizes[3].height,
                    alt: post?.title,
                    type: "image/jpeg",
                  },
                  {
                    url: post?.featuredImage?.node.mediaDetails.sizes[3]
                      .sourceUrl,
                  },
                ],
                siteName: process.env.NEXT_PUBLIC_APP_NAME,
              }}
            />
          )}
          <Share />
          <div className={styles.postbanner}>
            <h1 className="container">{post?.title}</h1>
            {/* {post.featuredImage && (
              <Image
                priority
                src={post.featuredImage.node.mediaDetails.sizes[5].sourceUrl}
                objectFit="cover"
                layout="fill"
                alt={post?.title}
              />
            )} */}
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div
                  className={`my-4 article ${styles.article}`}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              <div className="col-md-4">
                <div className="sticky">
                  <Toc />
                  <Sidebar categories={categories || []} styles={styles} />
                  <Ashish />
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};
export default Blog;

export async function getStaticPaths() {
  const { nodes: posts } = await getPostList();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(req) {
  const post = await getSinglePost(req.params.slug);
  if (!post)
    return {
      notFound: true,
    };
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}
