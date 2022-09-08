import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/blog.module.css";
const Post = ({ post }) => {
  const { title, description, files, author } = post.data.attributes;
  return (
    <div className={`${styles.blog} container`}>
      <div className="row">
        <div className="col-md-9">
          <div className="my-4">
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
            <div className="position-relative my-4" style={{ height: "400px" }}>
              <Image
                src={
                  "http://localhost:1337" +
                  files.data[0].attributes?.formats?.medium?.url
                }
                layout="fill"
                alt=""
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`my-4 ${styles.sticky}`}>
            <h2>Sidebar</h2>
            <ul className={`list-unstyled d-flex flex-wrap ${styles.tag}`}>
              {[...Array(10)].map((tag) => {
                return (
                  <li key={Math.random()}>
                    <Link href="">HTML</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
export async function getServerSideProps({ params }) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blog/${params.slug}`
  );
  const result = await data.json();
  return {
    props: {
      post: result,
    },
  };
}
