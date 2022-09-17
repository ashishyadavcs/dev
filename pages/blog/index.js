import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/blog.module.css";
import { toast } from "react-toastify";
const Blog = ({ posts }) => {
  return (
    <div className={`${styles.blog} container`}>
      <div className="row">
        <div className="col-md-9">
          {posts?.length &&
            posts?.map(({ attributes, id }) => {
              return (
                <div className="my-4" key={id}>
                  <Link href={`/blog/${attributes.slug}`} passHref>
                    <h2>{attributes.title}</h2>
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{ __html: attributes.description }}
                  />
                  <div
                    className="position-relative my-4"
                    style={{ height: "400px" }}
                  >
                    {attributes.files.data[0].attributes.mime.includes(
                      "image/png"
                    ) ? (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CMS_URL}${attributes.files.data[0].attributes?.formats?.medium?.url}
                      `}
                        layout="fill"
                        alt=""
                        objectFit="cover"
                      />
                    ) : (
                      <iframe
                        height={300}
                        width={400}
                        src={`${process.env.NEXT_PUBLIC_CMS_URL}${attributes.files.data[0].attributes?.url}`}
                      ></iframe>
                    )}
                  </div>
                </div>
              );
            })}
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
export default Blog;
export async function getServerSideProps() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/blog/`);
  try {
    const result = await data.json();
    return {
      props: {
        posts: result.data,
      },
    };
  } catch (err) {
    toast.error("internal server error");
    return {
      props: {},
    };
  }
}
