import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/post.module.css";
import { useRouter } from "next/router";
import moment from "moment";
import { AiOutlineClockCircle } from "react-icons/ai";

const Post = ({ remove, edit, post }) => {
  const defaultimg = [1, 2];
  const router = useRouter();
  return (
    <>
      {!router.asPath.includes(post.slug) && (
        <Link
          key={post._id}
          href={`${post.url?post.url:`/blog/${post.slug}`}`}
          as={`${post.url?post.url:`/blog/${post.slug}`}`}
          passHref
        >
          <a
            title={post.title}
            style={{ textDecoration: "none" }}
            className={styles.post}
            key={post._id}
          >
            <span className={styles.thumbnail}>
              <Image
                objectFit="cover"
                objectPosition="left"
                layout="fill"
                priority
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
              ></Image>
            </span>
            <div className={styles.content}>
              <h3> {post.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <span className={styles.date}>
                <AiOutlineClockCircle size={15} /> {moment(post.date).fromNow()}
              </span>
            </div>
          </a>
        </Link>
      )}
    </>
  );
};

export default Post;
