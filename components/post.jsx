import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/post.module.css";
import { useRouter } from "next/router";
import moment from "moment";
import { AiOutlineClockCircle } from "react-icons/ai";

const Post = ({ remove, edit, post }) => {
  const router = useRouter();
  return (
    <>
      {!router.asPath.includes(post.slug) && (
        <Link
          key={post._id}
          href={`/blog/${post.slug}`}
          as={`/blog/${post.slug}`}
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
                layout="fill"
                priority
                alt=""
                src={
                  post.featuredImage
                    ? post.featuredImage?.node.mediaDetails.sizes[3]?.sourceUrl
                    : "/images/default.png"
                }
              ></Image>
            </span>
            <div className={styles.content}>
              <h3> {post.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <datetime className={styles.date}>
                <AiOutlineClockCircle size={15} /> {moment(post.date).fromNow()}
              </datetime>
            </div>
          </a>
        </Link>
      )}
    </>
  );
};

export default Post;
