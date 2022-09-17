export default async function handler(req, res) {
  const { demo } = req.query;
  const apiurl = `https://jsonplaceholder.typicode.com/posts/${demo.join(
    "/"
  )}?${new URLSearchParams(req.query)}`;
  console.log(req.headers.cookie);
  const option = {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      "user-role": "client",
      //   cookie: req.headers.cookie,
      //   Authorization: `Bearer ${token}`,
    },
  };
  if (req.method != "GET") {
    option.body = JSON.stringify(req.body);
  }
  try {
    const request = await fetch(apiurl, option);
    const result = await request.json();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
}
