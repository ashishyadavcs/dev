import Cookies from "cookies";
export default async function handler(req, res) {
  const token = req.cookies["x-token"] || req.headers.cookies;
  const user = req.cookies["_user"];
  const { slug } = req.query;
  const option = {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      cookie: req.headers.cookie,
      Authorization: `Bearer ${token}`,
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
    if (!result.success) {
      cookies.set("x-token", result.data.tokens.access.token, {
        overwrite: true,
        signed: true,
        expires: new Date(result.data.tokens.access.expiresAt),
        ...(process.env.COOKIE_DOMAIN && {
          domain: `${process.env.COOKIE_DOMAIN}`,
        }),
      });
      cookies.set("x-refresh", result.data.tokens.refresh.token, {
        overwrite: true,
        signed: true,
        expires: new Date(result.data.tokens.refresh.expiresAt),
        ...(process.env.COOKIE_DOMAIN && {
          domain: `${process.env.COOKIE_DOMAIN}`,
        }),
      });
    } else {
    }
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json({
      error: err,
    });
  }
}
