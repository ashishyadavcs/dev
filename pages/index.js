import { BsCheck2Circle } from "react-icons/bs";
import Image from "next/image";
import Whatsapp from "@/components/whatsapp";
import Blogpost from "@/components/blogpost";
import Link from "next/link";
import Seo from "@/components/organization";
import { openwhatsapp } from "utils/common";
import Styled from "@/styles/home";
import { getPostList } from "lib/posts";
import { FAQPageJsonLd, ProductJsonLd } from "next-seo";
import { useEffect } from "react";
import { animateList } from "utils/animation";
import { Bannerstyle } from "@/styles/banner";

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
        "Submit your order",
        "Pay half to confirm order",
        "Review Your website",
        "confirm order completed",
        "Make remaining Payment.",
        "Rate us",
        "Congrats! Your task delivered ",
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
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <h1 className="gradient-text heading text-capitalize">
                                Looking for a developer?
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

                            <Styled.Cta
                                onClick={e => {
                                    e.currentTarget.href = openwhatsapp();
                                }}
                            >
                                Get your website now
                            </Styled.Cta>
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
                    <div className="row my-4 pt-4">
                        <div className="col-md-5">
                            <Image
                                alt="website design services in india"
                                objectFit="contain"
                                height={300}
                                width={400}
                                src="/images/company/website-design.png"
                            />
                        </div>
                        <div className="col-md-7 d-flex flex-column justify-content-center">
                            <h2 className="mt-3 mt-md-0">Website development</h2>
                            <ul>
                                <li>Get your business website</li>
                                <li>WIth SEO Optimization</li>
                                <li>performing website</li>
                                <li>24x7 support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row my-4 d-flex align-items-center">
                        <div className="col-md-7">
                            <h2 className="mt-5 mt-md-0">Website redesign</h2>

                            <p>
                                Whether you are starting a new business, rebranding, or simply need
                                to update your existing website, our website development services
                                are here to help. Let us help you make the most of your online
                                presence and reach your target audience with a website that is
                                professional, functional, and effective
                            </p>
                        </div>
                        <div className="col-md-5">
                            <Image
                                alt="website design company"
                                objectFit="contain"
                                height={400}
                                width={500}
                                src="/images/company/website-redesign.png"
                            />
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5">
                            <Image
                                src="/images/company/speed.png"
                                height={400}
                                width={400}
                                alt="website design services near me"
                            />
                        </div>
                        <div className="col-md-7">
                            <h2>Website Speed Optimization</h2>
                            <p>
                                Maximize your online potential with our website optimization
                                services we understand that having a great website is just the first
                                step in achieving online success. That&apos;s why we offer
                                comprehensive website optimization services to help you drive
                                traffic, improve conversions, and reach your goals
                            </p>
                            <p>
                                In addition to improving your search engine rankings, our website
                                optimization services can help you increase your website&apos;s
                                speed and security, making it more accessible and trustworthy to
                                your visitors. We&apos;ll also provide ongoing monitoring and
                                support to keep your website performing at its best.
                            </p>
                            <Styled.Cta className="mt-4"
                                onClick={e => {
                                    e.currentTarget.href = openwhatsapp();
                                }}
                            >
                                Get Help Now
                            </Styled.Cta>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h2 className="text-center latestblog my-4">Latest blog posts</h2>
                    <Blogpost posts={postss} />
                    <Link href="/blog">
                        <a className="theme-btn d-block mx-auto text-center">Read More Blogs</a>
                    </Link>
                </div>
            </Styled.Landing>
            <Bannerstyle>
                <div className="col-md-6 mx-auto">
                    <p className="emoji">👨‍💻</p>
                    <h1>Frontend development</h1>
                    <p>
                        Learn frontend development with examples and practical exercise of
                        HTML,CSS,JS,React.js.
                    </p>
                    <ul>
                        <li>
                            <Link href="/free-html-css-templates">Free Website templates</Link>
                        </li>
                    </ul>
                </div>
            </Bannerstyle>
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
            ></FAQPageJsonLd>
        </>
    );
}
export async function getStaticProps() {
    const posts = await getPostList(0, 0, 3);
    return {
        props: {
            posts: posts.nodes,
            index_config:{
                layout:'default'
            }
        },
        revalidate: 1,
    };
}
