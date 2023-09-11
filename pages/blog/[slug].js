import styles from "../../styles/blog.module.css";
import Sidebar from "@/components/sidebar";
import { ArticleJsonLd, NextSeo } from "next-seo";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { getPostList, getPostSlugs, getSinglePost } from "lib/posts";
import { useEffect } from "react";
import Relatedposts from "@/components/relatedposts";
import Inpostad from "@/components/ads/inpostad";
import Ashish from "@/components/ashish";
import Fbcomment from "@/components/fbcomment";
import moment from "moment";
import Image from "next/image";

const Blog = ({ post, posts }) => {
    useEffect(() => {
        document.querySelector("code") !== null && hljs.highlightAll();
    }, [post]);

    return (
        <>
            {post && (
                <div className={`${styles.blog} mainscrollbar mb-4`}>
                    {post?.title && (
                        <>
                            <NextSeo
                                title={post?.title}
                                description={`${post?.excerpt
                                    .replace(/<[^>]+>/g, "")
                                    .slice(0, 125)}`.toString()}
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
                                            width: post?.featuredImage?.node.mediaDetails.sizes[3]
                                                .width,
                                            height: post?.featuredImage?.node.mediaDetails.sizes[3]
                                                .height,
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
                                        width: post?.featuredImage?.node.mediaDetails.sizes[3]
                                            .width,
                                        height: post?.featuredImage?.node.mediaDetails.sizes[3]
                                            .height,
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

                    <article>
                        <div className={styles.postbanner}>
                            {/* <Image alt={post?.title} priority layout="fill" objectFit="cover" src={post?.featuredImage?.node.mediaDetails.sizes[5]
                                            .sourceUrl}/> */}
                            <h1 className="container">{post?.title}</h1>
                            <datetime>{moment(post.date).format("LLLL")}</datetime>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 my-4">
                                    {/* <h1>{post?.title}</h1> */}
                                    <div
                                        className={` article ${styles.article}`}
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    ></div>
                                    <Fbcomment />
                                    <Inpostad />
                                    <Ashish width="100%" />
                                </div>
                                <div className="col-md-4">
                                    <div className="sticky">
                                        <Sidebar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div className="container my-4">
                        <Relatedposts posts={posts} />
                    </div>
                </div>
            )}
        </>
    );
};
export default Blog;

export async function getStaticPaths() {
    const posts = await getPostSlugs();
    const paths = posts.map(post => ({
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
