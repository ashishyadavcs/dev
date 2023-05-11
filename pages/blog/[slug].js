import Image from "next/image";
import Toc from "@/components/tableofcontent";
import styles from "../../styles/blog.module.css";
import Sidebar from "@/components/sidebar";
import { ArticleJsonLd, NextSeo } from "next-seo";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
const Share = dynamic(() => import("@/components/ui/share"), {
  ssr: false,
});

import { getPostList, getPostSlugs, getSinglePost } from "lib/posts";
import { useEffect, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import Relatedposts from "@/components/relatedposts";
import moment from "moment";
const Blog = ({ post, posts }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [post]);
  useLayoutEffect(()=>{
     document.querySelectorAll('article img').forEach(img=>img.setAttribute('loading','lazy'))
  })

  return (
    <>
      {post && (
        <main className={`${styles.blog} mainscrollbar mb-4`}>
          {post?.title && (
            <>
              <NextSeo
                title={post?.title}
                description={`${post?.excerpt
                  .replace(/<[^>]+>/g, "")
                  .slice(0, 125)}`}
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
                additionalMetaTags={[
                  {
                    name: "keywords",
                    content: post?.title,
                  },
                ]}
              />
              <ArticleJsonLd
                url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${post?.slug}`}
                title={post.title}
                images={[
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
                ]}
                datePublished={post.date}
                dateModified={post.date}
                authorName={[
                  {
                    name: "Frontendzone",
                    url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
                  },
                ]}
                publisherName="Frontendzone"
                publisherLogo={`${process.env.NEXT_PUBLIC_APP_URL}/dev/logo.svg`}
                description={post.description}
                isAccessibleForFree={true}
              />
            </>
          )}
          <Share />
          <article>
            <div className={styles.postbanner}>
              <h1 className="container">{post?.title}</h1>
              <datetime>{moment(post.date).format("LLLL")}</datetime>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 my-4">
                  <div
                    className={` article ${styles.article}`}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
                <div className="col-md-4">
                  <div className="sticky">
                    <Toc />
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <div className="container my-4">
            <Relatedposts posts={posts} />
          </div>
        </main>
      )}
    </>
  );
};
export default Blog;

export async function getStaticPaths() {
  const posts = await getPostSlugs();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps(req) {
  const post = await getSinglePost(req.params.slug);
  const { nodes: posts } = await getPostList(post);
  if (post == undefined)
    return {
      notFound: true,
    };
  return {
    props: {
      post,
      posts,
    },
    revalidate: 10,
  };
}
