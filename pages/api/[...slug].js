import Cookies from "cookies";

const followRequest = async (req, res, token) => {
  const { slug } = req.query;
  delete req.query.slug;
  const option = {
    method: req.method,
    headers: {
      "Content-Type": req.headers["Content-Type"] || "application/json",
      cookie: req.headers.cookie,
      Authorization: `Bearer ${token}`,
    },
  };

  if (req.method !== "GET") {
    option.body =
      typeof req.body === "object" ? JSON.stringify(req.body) : req.body;
  }
  const result = await fetch(
    `${process.env.BASE_URL}/${slug.join("/")}?${new URLSearchParams(
      req.query
    )}`,
    option
  )
    .then((res) => res.json())
    .catch((err) => ({
      success: false,
      message: err.message,
    }));
  res.json(result);
};
export default async function handler(req, res) {
  let token = req.cookies["x-token"] || req.headers.token;
  const refresh = req.cookies["x-refresh"] || req.headers.refresh;

  if (0) {
    res
      .status(401)
      .json({ success: false, message: "Unauthorized", code: 401 });
  } else if (!token && refresh) {
    const result = await fetch(`${process.env.BASE_URL}/refresh/`, {
      method: "POST",
      body: JSON.stringify({ refreshToken: refresh }),
      headers: {
        "Content-Type": "application/json",
        cookie: req.headers.cookie,
      },
    }).then((resp) => resp.json());
    if (result.success) {
      const cookies = new Cookies(req, res, { keys: ["keras-token"] });
      if (result.data.tokens) {
        token = result.data.tokens.access.token;
        cookies.set("x-token", result.data.tokens.access.token, {
          overwrite: true,
          signed: true,
          expires: new Date(result.data.tokens.access.expiresAt),
        });
        cookies.set("x-refresh", result.data.tokens.refresh.token, {
          overwrite: true,
          signed: true,
          expires: new Date(result.data.tokens.refresh.expiresAt),
        });
      }
      followRequest(req, res, token);
    } else res.status(401).json(result);
  } else followRequest(req, res, token);
}
