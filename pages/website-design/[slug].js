import Webdesign from "@/components/webdesign";
import { tags } from "public/data/webdesign";
const Page = ({ title }) => {
  return <Webdesign title={title} />;
};

export default Page;
export async function getStaticPaths() {
  const posts = tags;
  const paths = posts.map((post) => ({
    params: { slug: post },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps(req) {
  return {
    props: {
      title: req.query || "",
    },
  };
}
