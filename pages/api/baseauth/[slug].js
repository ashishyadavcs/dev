import Cookies from "cookies";
export default async function handler(req, res) {
  const { slug } = req.query;
  const option = {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      cookie: req.headers.cookie,
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
      `${process.env.BASE_URL}/${slug}`,
      option
    ).then((res) => res.json());
    if (result.success) {
      const cookies = new Cookies(req, res, { keys: ["keras-token"] });
      if (result.data.user) {
        cookies.set("_user", result.data.user._id, {
          overwrite: true,
          signed: true,
          maxAge: 60 * 60 * 24 * 100000,
          ...(process.env.COOKIE_DOMAIN && {
            domain: `${process.env.COOKIE_DOMAIN}`,
          }),
        });
      }
      if (result.data.tokens) {
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
      }
      res.json(result);
    } else {
      res.json({
        ...result,
        success: false,
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
}
