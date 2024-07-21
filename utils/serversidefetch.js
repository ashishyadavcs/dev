import { toast } from "react-toastify";

export const fetchData = async (url, req) => {
    try {
        const request = await fetch(url, {
            headers: {
                cookie: req.headers.cookie, //dont remove, it's for authorization
            },
        });
        if (request.ok) {
            const data = await request.json();
            return data;
        } else {
            return {};
        }
    } catch (err) {
        toast.error(err.message);
        return [];
    }
};
