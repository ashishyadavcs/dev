import { getCategorySlugs, getPostSlugs } from "lib/posts";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const posts = await getPostSlugs();
  const categories = await getCategorySlugs();
  const path1 = posts.map((post) => ({
    loc: `${process.env.APP_URL}/blog/${post.slug}`,
    lastmod: new Date().toISOString(),
  }));
  // const path2 = categories.map((post) => ({
  //   loc: `${process.env.APP_URL}/blog/category/${post.params.categoryName}`,
  //   lastmod: new Date().toISOString(),
  // }));
  const fields = [...path1];
  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
