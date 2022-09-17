export default async function handler(req, res) {
  const token = process.env.NEXT_PUBLIC_CMS_TOKEN;
  const { slug } = req.query;
  const data = await fetch(`${process.env.CMS_API}/${slug}?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const result = await data.json();
  res.json(result);
}
