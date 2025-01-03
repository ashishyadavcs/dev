import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineClockCircle } from "react-icons/ai";
import PostStyle from "@/styles/post.styled";
import Link from "next/link";

const Post = ({ post }) => {
    const defaultimg = [1, 2];
    const router = useRouter();
    return (
        !router.pathname.includes(post.slug) && (
            <PostStyle>
                <Link
                    key={post._id}
                    prefetch={false}
                    href={`${post.url ? post.url : `/blog/${post.slug}`}`}
                    as={`${post.url ? post.url : `/blog/${post.slug}`}`}
                    passHref
                    title={post.title}
                    style={{ textDecoration: "none" }}
                    className="post"
                >
                    <>
                        <span className="thumbnail">
                            <Image
                                objectFit="cover"
                                objectPosition="left"
                                layout="fill"
                                alt={post.title}
                                src={
                                    post.featuredImage
                                        ? post.featuredImage?.node.mediaDetails.sizes[3]?.sourceUrl
                                        : `/images/default${
                                              defaultimg[
                                                  Math.floor(Math.random() * defaultimg.length)
                                              ]
                                          }.png`
                                }
                            />
                        </span>
                        <div className="content">
                            <h3> {post.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                            <span className="date">
                                <AiOutlineClockCircle size={15} />{" "}
                                {new Date(post.date).toLocaleDateString()}
                            </span>
                        </div>
                    </>
                </Link>
            </PostStyle>
        )
    );
};

export default Post;
