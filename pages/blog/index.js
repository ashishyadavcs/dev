import Blogstyle from "@/styles/blog.styled";
import Sidebar from "@/components/sidebar";
import Post from "@/components/post";
import { getCategorySlugs, getPostList } from "lib/posts";
import { NextSeo } from "next-seo";
import Loadmore from "@/components/loadmorepost";
import Inpostad from "@/components/ads/inpostad";
const Blog = ({ posts, categories, data }) => {
    return (
        <Blogstyle className={`blog container my-4`}>
            <NextSeo
                title="Frontendzone blog"
                canonical={`${process.env.NEXT_PUBLIC_APP_URL}/blog`}
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content: `frontendzone, ${categories
                            .map(el => el.params.categoryName)
                            .join()}`,
                    },
                ]}
            />
            <div className="row">
                <div className="col-md-8">
                    <div className={"items"}>
                        <Post
                            post={{
                                title: "Frontend Developer Roadmap, Top 5 Ultimate Guidance To Be A Frontend Developer",
                                excerpt: `<p>Frontend developers In the ever-evolving world of web development, are the unsung heroes who breathe life into the virtual world we live in. 💕 </p>`,
                                url: "/frontend-developer",
                                date: "Tue Oct 03 2023",
                            }}
                        />
                        {posts?.length > 0 &&
                            posts?.map((post, i) => {
                                return (
                                    <div key={post.slug}>
                                        {i % 3 == 0 ? <Inpostad /> : <Post post={post} />}
                                    </div>
                                );
                            })}
                        <Loadmore pageInfo={data?.pageInfo} />
                    </div>
                </div>
                <div className="col-md-4">
                    <Sidebar categories={categories} />
                </div>
            </div>
        </Blogstyle>
    );
};
export default Blog;

export async function getStaticProps() {
    try {
        const data = await getPostList(0, 0, 15);
        const categories = await getCategorySlugs();
        return {
            props: {
                data,
                posts: data.nodes || [],
                categories,
            },
        };
    } catch {
        return {
            props: {
                data: [],
                posts: [],
                categories: [],
            },
            revalidate: 10,
        };
    }
}
