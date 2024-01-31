import Whatsapp from "@/components/whatsapp";
import Seo from "@/components/organization";
import { getPostList } from "lib/posts";
import { FAQPageJsonLd, ProductJsonLd } from "next-seo";
import Ashish from "@/components/ashish";
import Image from "next/image";
import { Bannerstyle } from "@/styles/banner";
import Banner from "@/components/web/banner";
import Link from "next/link";

export default function Home({ posts }) {
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

            <Bannerstyle className="container my-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <p className="emoji">👨‍💻</p>
                        <h1>Frontend development</h1>
                        <p>
                            Learn frontend development with examples and practical exercise of
                            HTML,CSS,JS,React.js.
                        </p>
                        <ul>
                            <li><Link href={"/ui-sourcecodes"}>UI sourcecodes</Link></li>
                            <li><Link href="/">github repository of projects</Link></li>
                            <li><Link href="/blog">Regular frontend blogs</Link></li>
                            <li><Link href="/free-html-css-templates">Free Website templates</Link></li>
                        </ul>
                        
                    </div>
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
                        acceptedAnswerText: `Ashish Kumar ${(<Ashish />)}`,
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
        },
        revalidate: 1,
    };
}
