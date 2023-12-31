export const fetchData =async (url,req) => {
    try{
        const request = await fetch(url, {
            headers: {
                cookie: req.headers.cookie, //dont remove
            },
        });
        const data =  await request.json() 
        return data
    }catch{
        return []
    }
};
