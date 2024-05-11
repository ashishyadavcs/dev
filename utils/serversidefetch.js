export const fetchData = async (url, req) => {
    try {
        const request = await fetch(url, {
            headers: {
                cookie: req.headers.cookie, //dont remove
            },
        });
        if (request.ok) {
            const data = await request.json();
            return data;
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
        return [];
    }
};
