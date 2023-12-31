import Cookies from "cookies";

export const setTokenCookies = (req, res, result) => {
    const cookies = new Cookies(req, res, { keys: ["frontend"] });
    if (result.data.user) {
        cookies.set("_user", result.data.user._id, {
            overwrite: true,
            signed: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 100000,
            ...(process.env.COOKIE_DOMAIN && {
                domain: `${process.env.COOKIE_DOMAIN}`,
            }),
        });
    }

    cookies.set("x-token", result.data.tokens.access.token, {
        overwrite: true,
        signed: true,
        path: "/",
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
};
