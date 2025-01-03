import { setTokenCookies } from "utils/cookie";
export default async function handler(req, res) {
    const { slug } = req.query;
    const option = {
        method: req.method,
        credentials: "include",
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
        const result = await fetch(`${process.env.BASE_URL}/${slug}`, option).then(res =>
            res.json()
        );
        if (result.success) {
            if (result.data.tokens) {
                setTokenCookies(req, res, result);
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
