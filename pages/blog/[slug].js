import Image from "next/image";
import Toc from "@/components/tableofcontent";
import styles from "../../styles/blog.module.css";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Share from "@/components/ui/share";
import Ashish from "@/components/ashish";
const Blog = ({ post, blogs }) => {
  const router = useRouter();
  console.log(post);
  return (
    <main className={`${styles.blog} mainscrollbar mb-4`}>
      <Share />
      <div className={styles.postbanner}>
        <h1>{post.title}</h1>
        {post.thumbnail && (
          <Image
            priority
            src={
              typeof post.thumbnail == undefined
                ? post.thumbnail
                : "https://media.istockphoto.com/id/1288739928/photo/its-boring.jpg?s=170667a&w=0&k=20&c=uO7tJnfS1ioV2UOdT0hAt4O6daNm4TGl1malL-7kDBg="
            }
            objectFit="cover"
            layout="fill"
            alt={post.title}
          />
        )}
      </div>
      <NextSeo title={post.title} description={post.description} />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div
              className="my-4 article"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          <div className="col-md-4">
            <Toc />
            <Sidebar styles={styles} />
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
  const [blogs, post] = await Promise.all([
    fetch(`${process.env.APP_URL}/api/post`).then((res) => res.json()),
    fetch(`${process.env.APP_URL}/api/post/${slug}`).then((res) => res.json()),
  ]);

  return {
    props: {
      post: post.post || [],
      blogs: blogs.posts || [],
    },
  };
}
