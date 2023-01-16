export default async function handler(req, res) {
  const { slug } = req.query;
  const option = {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      cookie: req.headers.cookie,
      // Authorization: `Bearer ${token}`,
    },
  };
  if (req.method != "GET") {
    option.body =
      typeof req.body == "object"
        ? JSON.stringify(req.body)
        : JSON.stringify(JSON.parse(req.body));
  }
  try {
    const result = await fetch(
      `${process.env.BASE_URL}/${slug.join("/")}`,
      option
    ).then((res) => res.json());
    res.json(result);
  } catch (err) {
    res.json({
      success: false,
      error: err.message,
    });
  }
}
