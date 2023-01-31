import FormData from "form-data";
import fs from "fs";
import _multipart from "middleware/_multipart";
const handler = async (req, res) => {
  const token = req.cookies["x-refresh"] || req.headers.cookies;
  const { body, files } = req;
  const form = new FormData();
  Object.keys(body).forEach((key) =>
    Array.isArray(body[key])
      ? body[key].forEach((item) => form.append(key, item))
      : form.append(key, body[key])
  );
  Object.keys(files).forEach((key) => {
    Array.isArray(files[key])
      ? files[key]
          .filter((f) => f.size > 0)
          .map((file) => {
            form.append(
              key,
              fs.createReadStream(file.filepath),
              file.newFilename
            );
          })
      : files[key].size > 0 &&
        form.append(
          key,
          fs.createReadStream(files[key].filepath),
          files[key].newFilename
        );
  });
  // TODO: need to unlink the files
  if (token) {
    if (req.method === "POST") {
      const data = await fetch(`${process.env.BASE_URL}/upload/`, {
        method: req.method,
        body: form,
        headers: {
          Authorization: `token ${token}`,
          cookie: req.headers.cookie,
          "user-agent": req.headers["user-agent"],
        },
      }).then((res) => res.json());
      return res.json(data);
    } else
      res.status(405).json({
        status: 405,
        error: "Method Not Allowed",
        message: "Method Not Allowed",
      });
  } else
    res.status(401).json({
      status: 401,
      error: "Unauthorized",
      message: "You must be logged in to access this resource",
    });
};

export default _multipart(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
