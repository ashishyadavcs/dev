import Cookies from "cookies";
import { setTokenCookies } from "utils/cookie";
const sendRequest = async (req, res, token) => {
    const { slug } = req.query;
    delete req.query.slug;
    const option = {
        method: req.method,
        headers: {
            "Content-Type": req.headers["Content-Type"] || "application/json",
            Authorization: `Bearer ${token}`,
            ...req.headers,
            cookie:req.headers.cookie
        },
    };

    if (req.method !== "GET") {
        option.body = typeof req.body === "object" ? JSON.stringify(req.body) : req.body;
    }
    const result = await fetch(
        `${process.env.BASE_URL}/${slug.join("/")}?${new URLSearchParams(req.query)}`,
        option
    )
        .then(res => res.json())
        .catch(err => ({
            success: false,
            message: err.message,
        }));
    return res.json(result);
};
export default async function handler(req, res) {
    const cookies = new Cookies(req, res, { keys: ["frontend"] });
    let token = cookies.get("x-token");
    const refresh = cookies.get("x-refresh");

    if (!token && refresh) {
        const result = await fetch(`${process.env.BASE_URL}/refresh`, {
            method: "POST",
            body: JSON.stringify({ refreshToken: refresh }),
            headers: {
                "Content-Type": "application/json",
                cookie: req.headers.cookie,
            },
        }).then(resp => resp.json());

        if (result.success) {
            if (result.data.tokens) {
                token = result.data.tokens.access.token;
                setTokenCookies(req, res, result);
            }
            sendRequest(req, res, token);
        } else res.status(401).json(result);
    } else sendRequest(req, res, token);
}
