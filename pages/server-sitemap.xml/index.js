import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const response = await fetch(
    `${process.env.APP_URL}/api/posts?fields=items(title,id)`
  );
  const capsules = await response.json();
  const fields = capsules.items.map((post) => ({
    loc: `${process.env.APP_URL}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
