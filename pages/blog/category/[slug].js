import { getCategoryDetails, getCategorySlugs, getPostList } from "lib/posts";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Post from "@/components/post";
import Link from "next/link";
import dynamic from "next/dynamic";
import Blogstyle from "@/styles/blog.styled";
const Share = dynamic(() => import("@/components/ui/share"), {
    ssr: false,
});
const Blog = ({ posts, category }) => {
    const router = useRouter();
    return (
        <>
            {category && (
                <Blogstyle className={`blog mainscrollbar mb-4`}>
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
                    <div className={"postbanner"}>
                        <h1 className="p-2">{category.name}</h1>
                    </div>
                    <div className="container my-4">
                        <div className="items">
                            {posts?.length > 0 &&
                                posts?.map(post => {
                                    return <Post key={post._id} post={post}  />;
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
                </Blogstyle>
            )}
        </>
    );
};
export default Blog;
export async function getStaticPaths() {
    const categories = await getCategorySlugs();
    const paths = categories.map(post => ({
        params: { slug: post.params.categoryName },
    }));
    return {
        paths,
        fallback: "blocking",
    };
}
export async function getStaticProps({ params }) {
    const posts = await getPostList(
        null,
        {
            key: "categoryName",
            value: params.slug,
        },
        20
    );
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
