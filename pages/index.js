import { BsCheck2Circle } from "react-icons/bs";
import Image from "next/image";
import Whatsapp from "@/components/whatsapp";
import Link from "next/link";
import Seo from "@/components/organization";
import Styled from "@/styles/home";
import { getPostList } from "lib/posts";
import { FAQPageJsonLd, ProductJsonLd } from "next-seo";
import { useEffect } from "react";
import { animateList } from "utils/animation";
import { Bannerstyle } from "@/styles/banner";
import Promotion from "@/components/Promotion";
import Blogpost from "@/components/blogpost";

export default function Home({ posts }) {
    const postss = [
        {
            title: "Frontend Developer Roadmap, Top 5 Ultimate Guidance To Be A Frontend Developer",
            excerpt: `<p>Frontend developers In the ever-evolving world of web development, are the unsung heroes who breathe life into the virtual world we live in. 💕 </p>`,
            url: "/frontend-developer",
            date: "Tue Oct 03 2023",
        },
        ...posts,
    ];
    const steps = [
        "Learn & Understand Topic",
        "HTML,CSS, JS, React.js, Next.js, SEO",
        "Exercise with real world use case",
        "Cover all frontend topics",
        "Prepare for Interview",
        "Get Placed",
    ];
    useEffect(() => {
        animateList(".hiw li");
    }, []);

    return (
        <>
            <Seo />
            <ProductJsonLd
                productName="frontendzone"
                type="Product"
                brand="frontendzone"
                description={`welcome to Frontendzone, your ultimate destination
                    for all things of front-end development. Frontendzone is a
                    destination to learn all frontend technologies practically with
                    industry experience.`.trim()}
                aggregateRating={{
                    worstRating: "1",
                    bestRating: "5",
                    ratingValue: "4.5",
                    ratingCount: "505435",
                }}
            />

            <Styled.Banner>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 col-12">
                            <h1 id="h1" className="gradient-text heading text-capitalize">
                                Master Frontend Development
                                <br></br>
                            </h1>

                            <ul className="list-unstyled mt-3 hiw">
                                {steps.map((li, i) => {
                                    return (
                                        <li key={i} className=" d-flex align-items-center">
                                            <BsCheck2Circle color="#4cd964" size={20} />
                                            <span className="mx-2">{li}</span>
                                        </li>
                                    );
                                })}
                            </ul>

                            <Link href="/blog">
                                <Styled.Cta>Start Learning Now</Styled.Cta>
                            </Link>
                        </div>
                        <div className="col-md-5 col-12 d-flex justify-content-end">
                            <Image
                                className="img"
                                alt="website design services in india"
                                objectFit="contain"
                                priority
                                height={300}
                                width={400}
                                src="/dev/business-website.svg"
                            />
                        </div>
                    </div>
                </div>
            </Styled.Banner>

            <Styled.Landing>
                <div className="container">
                    <h2 className="text-center latestblog my-4">Latest blog posts</h2>
                    <Blogpost posts={postss} />
                    <Link href="/blog" className="theme-btn d-block mx-auto text-center">
                        Read More Blogs
                    </Link>
                </div>
            </Styled.Landing>
            
            <Whatsapp />
            <FAQPageJsonLd
                mainEntity={[
                    {
                        questionName: "who is founder of frontendzone",
                        acceptedAnswerText:
                            "Ashish Yadav is the founder of frontendzone working as software engineer.",
                    },
                    {
                        questionName: "CEO of frontendzone",
                        acceptedAnswerText: `Ashish Kumar`,
                    },
                ]}
            />
        </>
    );
}
export async function getStaticProps() {
    const posts = await getPostList(0, 0, 3);
    return {
        props: {
            posts: posts.nodes,
            index_config: {
                layout: "default",
            },
        },
        revalidate: 1,
    };
}
