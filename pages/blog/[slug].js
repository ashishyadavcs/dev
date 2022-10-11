import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/blog.module.css";
import { ArticleJsonLd, NextSeo } from "next-seo";

const Post = ({ data, allpost }) => {
  console.log(allpost);
  const {
    title,
    slug,
    description,
    feature_image,
    files,
    author,
    publishedAt,
    updatedAt,
    post,
  } = data?.attributes;
  return (
    <>
      <NextSeo
        canonical={`${process.env.NEXT_PUBLIC_APP_URL}/${slug}`}
        title={title}
        description={description}
        openGraph={{
          type: "website",
          url: `${process.env.NEXT_PUBLIC_APP_URL}/${slug}`,
          title: title,
          description: description,
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          site_name: process.env.NEXT_PUBLIC_SITENAME,
        }}
        twitter={{
          handle: `@${process.env.NEXT_PUBLIC_SITENAME}`,
          site: `@${process.env.NEXT_PUBLIC_SITENAME}`,
          cardType: "summary_large_image",
        }}
      />

      <ArticleJsonLd
        type="Blog"
        url={`${process.env.NEXT_PUBLIC_APP_URL}/${slug}`}
        title="Blog headline"
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        datePublished={publishedAt}
        dateModified={updatedAt}
        authorName={author}
        description={description}
      />
      {feature_image?.data && (
        <div className="position-relative" style={{ height: "400px" }}>
          <Image
            alt=""
            priority={1}
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_CMS_URL}${feature_image?.data?.attributes?.url}`}
            layout="fill"
          />
        </div>
      )}
      <div className={`${styles.blog} container`}>
        <div className="row">
          <div className="col-md-9">
            <div className="my-4">
              <h1 className="text-info">{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post }}></div>
              {files.data.map((img) => {
                return (
                  <div
                    key={img.id}
                    className="position-relative my-4"
                    style={{
                      height: img.attributes.mime.split("/").includes("image")
                        ? "400px"
                        : "30px",
                    }}
                  >
                    {img.attributes.mime.split("/").includes("image") ? (
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_CMS_URL + img.attributes?.url
                        }
                        layout="fill"
                        alt=""
                        objectFit="cover"
                      />
                    ) : (
                      <a
                        height="100%"
                        width="100%"
                        download
                        href={
                          process.env.NEXT_PUBLIC_CMS_URL + img.attributes?.url
                        }
                      >
                        {img.attributes.name}
                      </a>
                    )}
                  </div>
                );
              })}
              <p>Author : {author?.data?.attributes?.name}</p>
              <div className="d-flex justify-content-between">
                <datetime>
                  Published at : {new Date(publishedAt).toDateString()}
                </datetime>
                <datetime>
                  Updated at : {new Date(updatedAt).toDateString()}
                </datetime>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`my-4 ${styles.sticky}`}>
              <h2>All Posts</h2>
              <ul className={`list-unstyled d-flex flex-wrap ${styles.tag}`}>
                {allpost.map((tag) => {
                  return (
                    <li key={Math.random()}>
                      <Link href={`/blog/${tag.attributes.slug}`}>
                        <a className="text-capitalize">
                          {tag.attributes.title}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

export async function getServerSideProps({ params }) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blog/${params.slug}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const allpost = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blog/`
  ).then((res) => res.json());

  return {
    props: {
      data: data.data || {},
      allpost: allpost.data || [],
    },
  };
}
