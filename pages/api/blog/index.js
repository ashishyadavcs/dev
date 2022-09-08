export default async function handler(req, res) {
  const token = process.env.NEXT_PUBLIC_CMS_TOKEN;
  const url = process.env.CMS_API;
  const data = await fetch(`${url}/blogs?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await data.json();
  res.json(result);
}
