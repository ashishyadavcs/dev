import Image from "next/image";
import Toc from "@/components/tableofcontent";
import styles from "../../styles/blog.module.css";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Share from "@/components/ui/share";
import Ashish from "@/components/ashish";

import { getCategorySlugs, getSinglePost } from "lib/posts";
const Blog = ({ post, categories }) => {
  const router = useRouter();
  console.log(post);
  return (
    <main className={`${styles.blog} mainscrollbar mb-4`}>
      <NextSeo
        title={post.title}
        description={` ${post?.excerpt.replace(/<[^>]+>/g, "").slice(0, 145)}`}
        canonical={`${process.env.NEXT_PUBLIC_APP_URL}/tutorial/${post?.slug}`}
        openGraph={{
          type: "article",
          url: `${process.env.NEXT_PUBLIC_APP_URL}/tutorial/${post.slug}`,
          title: post?.title,
          description: ` ${post.excerpt.replace(/<[^>]+>/g, "").slice(0, 145)}`,

          images: [
            {
              url: post?.featuredImage?.node.mediaDetails.sizes[3].sourceUrl,
              width: post?.featuredImage?.node.mediaDetails.sizes[3].width,
              height: post?.featuredImage?.node.mediaDetails.sizes[3].height,
              alt: post?.title,
              type: "image/jpeg",
            },
            { url: post?.featuredImage?.node.mediaDetails.sizes[3].sourceUrl },
          ],
          siteName: process.env.NEXT_PUBLIC_APP_NAME,
        }}
      />
      <Share />
      <div className={styles.postbanner}>
        <h1 className="p-2">{post.title}</h1>
        {post.featuredImage && (
          <Image
            priority
            src={post.featuredImage.node.mediaDetails.sizes[3].sourceUrl}
            objectFit="cover"
            layout="fill"
            alt={post.title}
          />
        )}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div
              className={`my-4 article ${styles.article}`}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          <div className="col-md-4">
            <Toc />
            <Sidebar categories={categories || []} styles={styles} />
            <Ashish />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Blog;
export async function getServerSideProps(req) {
  const { slug } = req?.query;
  const post = await getSinglePost(slug);
  const data = await getCategorySlugs();

  return {
    props: {
      post: post || [],
      categories: data,
    },
  };
}
