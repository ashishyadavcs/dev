import styles from "../../styles/blog.module.css";
import Sidebar from "@/components/sidebar";
import { ArticleJsonLd, NextSeo, ProductJsonLd } from "next-seo";
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { getPostList, getPostSlugs, getSinglePost } from "lib/posts";
import { useEffect } from "react";

import dynamic from "next/dynamic";

const Fbcomment = dynamic(() => import("@/components/fbcomment"), {
    loading: () => <p>Loading...</p>,
});
const Relatedposts = dynamic(() => import("@/components/relatedposts"), {
    loading: () => <p>Loading...</p>,
});
const Ashish = dynamic(() => import("@/components/ashish"), {
    loading: () => <p>Loading...</p>,
});

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

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
                                titleTemplate="%s 🔥"
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
                                robotsProps={{
                                    maxImagePreview: "standard",
                                }}
                            />
                            <ProductJsonLd
                                productName={post?.title}
                                type="Product"
                                brand="frontendzone"
                                description={`${post.excerpt
                                    .replace(/<[^>]+>/g, "")
                                    .slice(0, 145)}`}
                                aggregateRating={{
                                    worstRating: "1",
                                    bestRating: "5",
                                    ratingValue: "4.5",
                                    ratingCount: "505435",
                                }}
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
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 my-4">
                                    <h1>{post?.title}</h1>

                                    <div
                                        className={` article ${styles.article}`}
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    ></div>

                                    <div className={styles.category}>
                                        <ul className={styles.catlist}>
                                            {post.categories.nodes.map(cat => (
                                                <li>
                                                    <Link href={`/blog/category/${cat.name}`}>
                                                        
                                                            <BsArrowRight size={18} />
                                                            {cat.name}
                                                        
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Fbcomment />
                                    <h2 className="my-3">About Author</h2>
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
    const data = await getPostList(post);
    const { nodes: posts } = data;
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
