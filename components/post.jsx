import Image from "next/image";
import Link from "next/link";

const Post = ({ styles, remove, edit, post }) => {
  return (
    <Link key={post._id} href={`/blog/${post.slug}`} passHref>
      <div className={styles.post} key={post._id}>
        <span className={styles.thumbnail}>
          <Image
            objectFit="cover"
            layout="fill"
            alt=""
            src={
              typeof post.thumbnail == undefined
                ? post.thumbnail
                : "https://media.istockphoto.com/id/1288739928/photo/its-boring.jpg?s=170667a&w=0&k=20&c=uO7tJnfS1ioV2UOdT0hAt4O6daNm4TGl1malL-7kDBg="
            }
          ></Image>
        </span>
        <div className={styles.content}>
          <h3> {post.title}</h3>
          <p>{post.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
